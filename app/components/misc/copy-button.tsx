"use client";

import {useState} from "react";

export function CopyButton({text, className}: { text: string; className?: string }){
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        try{
            navigator.clipboard.writeText(text).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }).catch(() => {
                fallbackCopy(text);
            });
        }catch{
            fallbackCopy(text);
        }
    };

    const fallbackCopy = (str: string) => {
        const ta = document.createElement("textarea");
        ta.value = str;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={className ?? "cursor-pointer rounded-lg p-1.5 text-text-muted transition-colors hover:text-accent"}
            aria-label="Copy"
        >
            {copied? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" className="h-5 w-5 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.5" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 1.5H6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 6 19.5h9a2.25 2.25 0 0 0 2.25-2.25V3.75A2.25 2.25 0 0 0 15.75 1.5Z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M18 5.25h1.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 19.5 22.5H9a2.25 2.25 0 0 1-2.25-2.25V18"/>
                </svg>
            )}
        </button>
    );
}