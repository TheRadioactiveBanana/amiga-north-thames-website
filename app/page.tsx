import {HeroSection} from "./components/hero-section";
import {Large3Images} from "./components/large-3-images";
import {MapEmbed} from "./components/map-embed";
import {ScrollingImages} from "./components/scrolling-images";
import {WhoAreWe} from "./components/who-are-we";
import {getGallerySrc} from "./lib/gallery";

export default async function HomePage(){
    const gallery = await Promise.all([
        getGallerySrc(1),
        getGallerySrc(2),
        getGallerySrc(3),
    ]);

    return (
        <>
            <HeroSection/>

            <ScrollingImages/>

            <WhoAreWe/>

            <MapEmbed/>

            <Large3Images gallery={gallery}/>
        </>
    );
}