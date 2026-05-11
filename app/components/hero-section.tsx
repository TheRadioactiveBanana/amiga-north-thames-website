import Image from "next/image";
import {readFile} from "fs/promises";
import {join} from "path";
import yaml from "js-yaml";

interface EventItem {
    date: string;
    text: string;
}

function ordinalSuffix(day: number): string {
    if(day > 3 && day < 21) return "th";
    switch(day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

function formatDate(dateStr: string): string{
    const d = new Date(dateStr);
    if(isNaN(d.getTime())) return dateStr;
    const day = d.getDate();
    const month = d.toLocaleDateString("en-GB", {month: "long"});
    const year = d.getFullYear();
    return `${day}${ordinalSuffix(day)} of ${month}, ${year}`;
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
                    <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-2 items-baseline">
                        {events.map((event, i) => (
                            <p key={i} className="contents text-sm">
                                <span className="text-text-primary font-medium text-right">
                                    {formatDate(event.date)}
                                </span>
                                <span className="text-text-secondary">
                                    &mdash; {event.text}
                                </span>
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}