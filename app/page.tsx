import Image from "next/image";
import {HeroSection} from "./components/hero-section";
import {MapEmbed} from "./components/map-embed";
import {WhoAreWe} from "./components/who-are-we";

export default async function HomePage(){
    return (
        <>
            <HeroSection/>

            {/* TODO: Replace placeholder cats with actual images */}
            <section className="overflow-hidden py-6 border-t border-b border-surface-border">
                <div className="relative flex overflow-x-hidden group">
                    <div className="flex shrink-0 gap-4 animate-marquee-left group-hover:[animation-play-state:paused]">
                        {Array.from({length: 12}).map((_, i) => (
                            <Image
                                key={i}
                                src="https://placecats.com/300/150"
                                alt="Placeholder cat"
                                width={300}
                                height={150}
                                className="rounded-lg shrink-0 w-75 h-37.5"
                            />
                        ))}
                    </div>
                    <div className="flex shrink-0 gap-4 animate-marquee-left group-hover:[animation-play-state:paused]"
                         aria-hidden="true">
                        {Array.from({length: 12}).map((_, i) => (
                            <Image
                                key={i}
                                src="https://placecats.com/300/150"
                                alt="Placeholder cat"
                                width={300}
                                height={150}
                                className="rounded-lg shrink-0 w-75 h-37.5"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <WhoAreWe/>
            <MapEmbed/>

            <div className="mx-auto mt-8 max-w-md rounded-xl overflow-hidden border border-surface-border transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(96,165,250,0.35)]">
                <Image
                    src="https://placecats.com/400/300"
                    alt="Placeholder cat"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                />
            </div>

            <div className="mx-auto mt-8 max-w-md rounded-xl overflow-hidden border border-surface-border transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(96,165,250,0.35)]">
                <Image
                    width={400}
                    height={300}
                    src="/meeting.gif"
                    alt="Amiga North Thames meeting"
                    className="w-full h-auto"
                />
            </div>
        </>
    );
}