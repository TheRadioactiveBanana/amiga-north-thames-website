import Image from "next/image";
import Link from "next/link";

const links = [
    {href: "https://www.amiganorththames.co.uk/main.shtml", label: "View Legacy Website"},
    {href: "/contact", label: "Contact"},
];

export function Footer(){
    return (
        <footer className="mt-auto border-t border-surface-border">
            <div className="mx-auto grid grid-cols-3 items-center h-16 max-w-5xl px-6">
                <p className="text-sm text-text-muted justify-self-start">
                    &copy; {new Date().getFullYear()} Amiga North Thames.
                </p>
                <p className="flex items-center justify-center gap-2 text-sm text-text-muted">
                    <Image
                        width={64}
                        height={64}
                        src="/meeting.gif"
                        alt="Amiga North Thames meeting"
                        className="inline-block rounded-sm"
                        unoptimized
                    />
                    Credits: Ashley Byte, thingEE, V100
                </p>
                <div className="flex items-center justify-end gap-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}