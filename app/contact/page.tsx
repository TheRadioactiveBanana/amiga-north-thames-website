import {EmailCard} from "../components/email/email-card";

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
            {emails.length > 0 ? (
                <div className="mt-12 grid gap-4">
                    {emails.map((email) => (
                        <EmailCard key={email} email={email} />
                    ))}
                </div>
            ) : (
                <div className="text-6xl text-red-500 text-shadow-red-800">
                    <h1>
                        No contact emails configured.
                    </h1>
                </div>
            )}
        </section>
    );
}