import Link from "next/link";

const links = [
    {href: "https://www.amiganorththames.co.uk/main.shtml", label: "View Legacy Website"},
    {href: "/contact", label: "Contact"},
];

export function Footer(){
    return (
        <footer className="mt-auto border-t border-surface-border">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <p className="text-sm text-text-muted">
                    &copy; {new Date().getFullYear()} Amiga North Thames.
                </p>
                <p>
                    Credits: Ashley Byte, thingEE, V100
                </p>
                <div className="flex items-center gap-4">
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