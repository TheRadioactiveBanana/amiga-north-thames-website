import Image from "next/image";
import Link from "next/link";

const links = [
    {href: "https://www.amiganorththames.co.uk/main.shtml", label: "View Legacy Website"},
    {href: "/contact", label: "Contact"},
];

export function Footer(){
    return (
        <footer className="mt-auto border-t border-surface-border">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center py-6 md:h-16 max-w-full px-4 md:px-6">
                <div className="flex gap-2 text-sm text-text-muted justify-center md:justify-start">
                    <Image
                        width={64}
                        height={64}
                        src="/writing.gif"
                        alt="Amiga North Thames meeting"
                        className="inline-block rounded-sm"
                        unoptimized
                    />
                    <div>
                       <p>Credits: Ashley Byte</p>
                       <p>Direction: thingEE, V100</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
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
                <div className="flex items-center justify-center md:justify-end">
                    <a
                        href="https://github.com/TheRadioactiveBanana/amiga-north-thames-website"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-text-muted hover:text-text-secondary transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
