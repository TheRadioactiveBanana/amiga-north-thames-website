import {CopyButton} from "../components/copy-button";

export default function ContactPage(){
    const emails = (process.env.NEXT_PUBLIC_CONTACT_EMAILS ?? "")
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean);

    return (
        <section className="mx-auto max-w-3xl px-6 py-24">
            <h1 className="text-center text-2xl font-semibold text-text-primary">
                Get in touch
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-center text-text-secondary">
                Reach out to us at any of the addresses below.
            </p>
            {emails.length > 0 && (
                <div className="mt-12 grid gap-4">
                    {emails.map((email) => (
                        <div
                            key={email}
                            className="flex items-center gap-3 rounded-xl border border-surface-border p-5 transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(96,165,250,0.3)]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="h-5 w-5 shrink-0 text-accent"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.953 5.736a1.5 1.5 0 0 1-1.594 0L2.25 6.75"
                                />
                            </svg>
                            <span className="text-sm font-medium text-text-primary">
                {email}
                </span>
                <span className="ml-auto">
                    <CopyButton text={email}/>
                </span>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}