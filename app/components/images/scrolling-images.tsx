import Image from "next/image";

export function ScrollingImages(){
    return (
        /* TODO: Replace placeholder cats with actual images */
        <section className="overflow-hidden py-4 md:py-6 border-t border-b border-surface-border">
            <div className="relative flex overflow-x-hidden group">
                <div className="flex shrink-0 gap-3 md:gap-4 animate-marquee-left group-hover:[animation-play-state:paused]">
                    {Array.from({length: 12}).map((_, i) => (
                        <Image
                            key={i}
                            src="https://placecats.com/300/150"
                            alt="Scrolling gallery image"
                            width={300}
                            height={150}
                            className="rounded-lg shrink-0 w-40 h-20 md:w-72 md:h-36"
                        />
                    ))}
                </div>
                <div className="flex shrink-0 gap-3 md:gap-4 animate-marquee-left group-hover:[animation-play-state:paused]"
                     aria-hidden="true">
                    {Array.from({length: 12}).map((_, i) => (
                        <Image
                            key={i}
                            src="https://placecats.com/300/150"
                            alt="Scrolling gallery image"
                            width={300}
                            height={150}
                            className="rounded-lg shrink-0 w-40 h-20 md:w-72 md:h-36"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
