import Image from "next/image";

interface Large3ImagesProps {
    gallery: string[];
}

export function Large3Images({gallery}: Large3ImagesProps){
    return (
        <section className="border-t border-surface-border">
            <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-24">
                <div className="mt-4 md:mt-8 flex flex-col gap-4 md:gap-6">
                    {gallery.map((src, i) => (
                        <div
                            key={i}
                            className="mx-auto max-w-4xl w-full group rounded-xl overflow-hidden aspect-4/3 ring-1 ring-surface-border transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(96,165,250,0.3)]"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${i + 1}`}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
