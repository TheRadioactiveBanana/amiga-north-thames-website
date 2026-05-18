"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
    {href: "https://www.amiganorththames.co.uk/main.shtml", label: "View Legacy Website"},
    {href: "/contact", label: "Contact"},
];

export function Nav(){
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full border-b border-surface-border">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                    <span className="text-base md:text-lg font-semibold tracking-tight text-text-primary">Amiga North Thames</span>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1">
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

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                >
                    <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-text-primary transition-opacity ${open ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-surface-border bg-surface px-4 py-3 space-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
