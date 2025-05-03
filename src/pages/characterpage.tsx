import CharacterAlbum from "../features/character-gallery/character-album";
import "../styles/character.css";
import { valdenarHero } from "../data/valdenar-hero";
import { sylvaraHero } from "../data/sylvara-hero";
import { nirvalisHero } from "../data/nirvalis-hero";
import { dravakhorHero } from "../data/dravakhor-hero";
import { riftlandHero } from "../data/riftland-hero";
// import { useEffect } from "react";
// import { addScrollListener } from "../lib/scroll-detect";
import { useSearchParams } from "react-router-dom";
import CharacterOverlay from "../features/character-gallery/character-overlay/character-overlay";

const CharacterPage = () => {
  // const [scrollDistance, setScrollDistance] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const isOverlayOpen = searchParams.get("hero") !== null;

  const openOverlay = (heroName: string) => {
    setSearchParams({ hero: heroName });
  };

  const closeOverlay = () => {
    setSearchParams("");
  };

  // useEffect(() => {
  //   const cleanup = addScrollListener((distance) => {
  //     setScrollDistance(distance);
  //   });

  //   return cleanup;
  // }, []);

  {
    /* 
scrollDistance > 550 && scrollDistance < 1392
        ? "character-valdenar-background"
        : scrollDistance > 1392 && scrollDistance < 2454
        ? "character-sylvara-background"
        : scrollDistance > 2454 && scrollDistance < 3454
        ? "character-nirvalis-background"
        : scrollDistance > 3454 && scrollDistance < 4524
        ? "character-dravakhor-background"
        : "character-background" */
  }
  return (
    <>
      {isOverlayOpen && (
        <CharacterOverlay
          isOverlayOpen={isOverlayOpen}
          closeOverlay={closeOverlay}
          searchParams={searchParams}
        />
      )}
      <main
        className={`w-full xl:h-[clamp(5000px,820vh,6500px)] xl:pt-[20vh] lg:h-[clamp(4800px,570vh,5300px)] sm:h-[clamp(5000px,1350vh,9000px)] lg:pt-[10vh] md:h-[clamp(5900px,470vh,6200px)] h-[clamp(4600px,530vh,5000px)] pt-[2vh] pb-5 duration-500 transition-all character-background`}
      >
        <CharacterAlbum
          title="Guardian of The Light of Valdenar"
          heroData={valdenarHero}
          openOverlay={openOverlay}
        />
        <CharacterAlbum
          title="Sentinel of The Verdant Heart of Sylvara "
          heroData={sylvaraHero}
          openOverlay={openOverlay}
        />
        <CharacterAlbum
          title="Commander of The Frostclad Legion"
          heroData={nirvalisHero}
          openOverlay={openOverlay}
        />
        <CharacterAlbum
          title="Heir of The Obsidian Throne of Dravakhor"
          heroData={dravakhorHero}
          openOverlay={openOverlay}
        />
        <CharacterAlbum
          title="Warden of The Fractured Realms of Riftlands"
          heroData={riftlandHero}
          openOverlay={openOverlay}
        />
      </main>
    </>
  );
};

export default CharacterPage;
