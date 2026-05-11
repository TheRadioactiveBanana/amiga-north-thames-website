import Image from "next/image";
import {HeroSection} from "./components/hero-section";
import {MapEmbed} from "./components/map-embed";

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

            <section className="border-t border-surface-border">
                <div className="mx-auto max-w-6xl px-6 py-24">
                    <h2 className="text-center text-3xl font-bold text-text-primary">
                        Who are we?
                    </h2>
                    <div className="mx-auto mt-8 max-w-4xl space-y-6 text-text-secondary leading-relaxed">
                        <p>Amiga North Thames is a computer user group, based in North East London (U.K.) which was
                            started back in January 1999. We are a dedicated bunch of enthusiasts who fondly remember
                            the Amiga and other systems from its day.</p>
                        <p>We meet up once a month and discuss, demonstrate, build, game and repair our old machines. We
                            also arrange head to head or multi-player gaming sessions this could be from anything from
                            Stunt Car Racer, Sensible Soccer, and Skidmarks right up to Freespace 2 and beyond.</p>
                        <p>Got a Classic Amiga and want to upgrade or repair it? Want to try or install the latest CaffeineOS or AmigaOS?
                            Want to show off your latest build or work on something together?
                            whatever it is bring it along and set it up! </p>

                        <p>Amiga North Thames remains the U.K.&#39;s longest running and most successful Amiga
                            enthusiast group covering London and the South-East. We offer a warm welcome to anybody who
                            prefers computing with all the fun that Windows took away. Admittance is free for your first
                            meeting, thereafter it is £8.00 per meeting. There are no membership fees</p>
                    </div>
                </div>
            </section>

            <MapEmbed/>

            <div
                className="mx-auto mt-8 max-w-md rounded-xl overflow-hidden border border-surface-border transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(96,165,250,0.35)]">
                <Image
                    src="https://placecats.com/400/300"
                    alt="Placeholder cat"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                />
            </div>

            <div
                className="mx-auto mt-8 max-w-md rounded-xl overflow-hidden border border-surface-border transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(96,165,250,0.35)]">
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