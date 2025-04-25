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
    <div className="w-full h-[1050px] grid grid-rows-[150px_900px]">
      <div className=" text-white underline flex justify-center items-center">
        <h2 className="text-[40px] ">{title}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-[100px]">
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
  );
};

export default CharacterAlbum;
