import Link from "next/link";

const links = [
    {href: "https://www.amiganorththames.co.uk/main.shtml", label: "View Legacy Website"},
    {href: "/contact", label: "Contact"},
];

export function Nav(){
    return (
        <nav className="w-full border-b border-surface-border">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                    <span className="text-lg font-semibold tracking-tight text-text-primary">Amiga North Thames</span>
                </Link>
                <div className="flex items-center gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}