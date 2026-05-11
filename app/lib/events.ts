import {readFile} from "fs/promises";
import {join} from "path";
import yaml from "js-yaml";

export function ordinalSuffix(day: number): string{
    if(day > 3 && day < 21) return "th";

    switch(day % 10){
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

export function formatDate(dateStr: string): string{
    const date = new Date(dateStr);

    if(isNaN(date.getTime())) return dateStr;

    const day = date.getDate();
    const month = date.toLocaleDateString("en-GB", {month: "long"});
    const year = date.getFullYear();

    return `${day}${ordinalSuffix(day)} of ${month}, ${year}`;
}

export interface EventItem {
    date: string;
    text: string;
}

export async function getEvents(): Promise<EventItem[]>{
    try{
        const fileContents = await readFile(join(process.cwd(), "events.yml"), "utf-8");
        const parsed = yaml.load(fileContents);

        if(!Array.isArray(parsed)) return [];

        return parsed
            .filter((item: unknown): item is Record<string, string> =>
                typeof item === "object" && item !== null && "date" in item && "text" in item
            )
            .map((item) => ({
                date: String(item.date),
                text: String(item.text),
            }));
    }catch{
        return [];
    }
}