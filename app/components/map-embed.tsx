import {CopyButton} from "./copy-button";

export function MapEmbed(){
    const lat = process.env.NEXT_PUBLIC_MAP_LAT;
    const lng = process.env.NEXT_PUBLIC_MAP_LNG;
    const address = process.env.NEXT_PUBLIC_ADDRESS ?? "";

    if(!lat || !lng) return null;

    return (
        <section className="border-t border-surface-border">
            <div className="mx-auto max-w-5xl px-6 py-24">
                <h2 className="text-center text-2xl font-semibold text-text-primary">
                    Where are we?
                </h2>
                <div
                    className="mx-auto mt-8 max-w-2xl group rounded-xl overflow-hidden aspect-4/3 ring-1 ring-surface-border transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(96,165,250,0.3)]">
                    <iframe
                        title="Meeting location"
                        src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    />
                </div>
                {address && (
                    <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-3">
                        <p className="text-lg font-bold text-text-primary">{address}</p>
                        <CopyButton text={address}/>
                    </div>
                )}
            </div>
        </section>
    );
}