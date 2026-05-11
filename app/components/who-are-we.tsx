import {readFile} from "fs/promises";
import {join} from "path";

async function getWhoAreWeText(): Promise<string>{
    try{
        return await readFile(join(process.cwd(), "who-are-we.txt"), "utf-8");
    }catch{
        return "";
    }
}

export async function WhoAreWe(){
    const text = await getWhoAreWeText();

    return (
        <section className="border-t border-surface-border">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <h2 className="text-center text-3xl font-bold text-text-primary">
                    Who Are We?
                </h2>
                <div className="mx-auto mt-8 max-w-4xl text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">
                    {text}
                </div>
            </div>
        </section>
    );
}
