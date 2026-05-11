import {stat} from "fs/promises";
import {join} from "path";

export async function getGallerySrc(index: number): Promise<string>{
    const filename = `image-${index}.png`;
    try{
        await stat(join(process.cwd(), "public", filename));
        return `/${filename}`;
    }catch{
        return "https://placecats.com/800/600";
    }
}
