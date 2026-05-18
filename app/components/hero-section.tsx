import Image from "next/image";
import {formatDate, getEvents} from "@/app/lib/events";

export async function HeroSection(){
    const events = await getEvents();

    return (
        <section className="flex items-center justify-center py-4 md:py-8 px-4">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <Image
                    src="/logo-inverted.png"
                    alt="Amiga North Thames"
                    width={400}
                    height={300}
                    className="shrink-0 w-64 md:w-80 lg:w-96 h-auto"
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
