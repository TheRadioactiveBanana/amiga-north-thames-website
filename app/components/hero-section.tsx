import Image from "next/image";
import {formatDate, getEvents} from "@/app/lib/events";

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