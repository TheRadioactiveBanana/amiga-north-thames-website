import Image from "next/image";
import {readFile} from "fs/promises";
import {join} from "path";
import yaml from "js-yaml";

interface EventItem {
    date: string;
    text: string;
}

function formatDate(dateStr: string): string{
    const d = new Date(dateStr);
    if(isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

async function getEvents(): Promise<EventItem[]>{
    try{
        const fileContents = await readFile(join(process.cwd(), "events.yml"), "utf-8");
        const parsed = yaml.load(fileContents);
        if(!Array.isArray(parsed)) return [];
        return parsed
            .filter(
                (item: unknown): item is Record<string, string> =>
                    typeof item === "object" && item !== null && "date" in item && "text" in item
            )
            .map((item) => ({
                date: String(item.date),
                text: String(item.text),
            }));
    }catch{
        return [];
    }
}

export async function HeroSection(){
    const events = await getEvents();

    return (
        <section className="flex items-center justify-center py-8">
            <div className="flex items-center gap-12">
                <Image
                    src="/logo-inverted.png"
                    alt="Amiga North Thames"
                    width={400}
                    height={300}
                    className="shrink-0"
                />
                {events.length > 0 && (
                    <div className="flex flex-col gap-2">
                        {events.map((event, i) => (
                            <p key={i} className="text-text-secondary text-sm">
                <span className="text-text-primary font-medium">
                  {formatDate(event.date)}
                </span>{" "}
                                &mdash; {event.text}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}