import CharacterCard from "./character-card";
import { HeroData } from "../../data/hero-type";
import { generateRandomKey } from "../../lib/random-key";
interface CharacterAlbumPropsType {
  title: string;
  openOverlay: (heroName: string) => void;
  heroData: HeroData;
}

const CharacterAlbum = ({
  title,
  heroData,
  openOverlay,
}: CharacterAlbumPropsType) => {
  return (
    <div className="w-full xl:h-[clamp(1000px,160vh,1500px)] lg:h-[clamp(800px,110vh,1500px)] md:h-[clamp(1200px,90vh,1500px)] sm:h-[clamp(1000px,250vh,1300px)] h-[clamp(900px,105vh,1300px)] grid xl:grid-rows-[10vh_130vh] lg:grid-rows-[10vh_100vh] md:grid-rows-[10vh_70vh] sm:grid-rows-[20vh_150vh] grid-rows-[10vh_95vh]">
      <div className=" text-white underline flex justify-center items-center">
        <h2 className="text-[4vw]">{title}</h2>
      </div>
      <div className="flex sm:justify-center">
        <div className="sm:w-[80%] w-full flex flex-wrap justify-center lg:gap-[3vh] xl:gap-x-[5vw]   ">
          {heroData.map((hero) => (
            <CharacterCard
              key={generateRandomKey()}
              name={hero.name}
              coverImage={hero.cardImg}
              title={hero.cardTextImg}
              character={hero.cardImgHover}
              openOverlay={openOverlay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterAlbum;
