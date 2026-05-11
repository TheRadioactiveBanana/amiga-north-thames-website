import {CopyButton} from "./copy-button";
import {EmailIcon} from "./email-icon";

interface EmailCardProps {
    email: string;
}

export function EmailCard({email}: EmailCardProps) {
    return (
        <div
            className="flex items-center gap-3 rounded-xl border border-surface-border p-5 transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(96,165,250,0.3)]"
        >
            <EmailIcon className="h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm font-medium text-text-primary">
                {email}
            </span>
            <span className="ml-auto">
                <CopyButton text={email}/>
            </span>
        </div>
    );
}
