import { valdenarHero } from "../../../data/valdenar-hero";
import { nirvalisHero } from "../../../data/nirvalis-hero";
import { sylvaraHero } from "../../../data/sylvara-hero";
import { dravakhorHero } from "../../../data/dravakhor-hero";
import { riftlandHero } from "../../../data/riftland-hero";
import { useState } from "react";
import CharacterDescriptionSection from "./character-description-section";
import { useCharacterData } from "../../../hooks/useCharacterData";
import useWindowSize from "../../../hooks/useWindowSize";
import CharacterInfoPanel from "./character-info-panel";

interface CharacterOverlayPropsType {
  closeOverlay: () => void;
  searchParams: URLSearchParams;
  isOverlayOpen: boolean;
}

const CharacterOverlay = ({
  closeOverlay,
  searchParams,
  isOverlayOpen,
}: CharacterOverlayPropsType) => {
  const [skillHover, setSkillHover] = useState("");
  const [overlayAppear, setOverlayAppear] = useState(false);
  const { width } = useWindowSize();

  const handleSkillHover = (skill: string) => {
    setSkillHover(skill);
  };

  const handleSkillLeave = () => {
    setSkillHover("");
  };

  const allHero = [
    ...nirvalisHero,
    ...valdenarHero,
    ...dravakhorHero,
    ...riftlandHero,
    ...sylvaraHero,
  ];

  const heroParams = searchParams.get("hero");

  const filteredHero = allHero.find((hero) => hero.name === heroParams);

  const {
    heroBackground,
    skillName1,
    skillName2,
    skillName3,
    heroName,
    heroSurname,
    description,
    weaponImg,
    weaponName,
    level,
    hp,
    power,
    st,
    def,
    skill1Icon,
    skill2Icon,
    skill3Icon,
    previewImage,
    showSkillDescription,
    skillIconPreviewing,
  } = useCharacterData(filteredHero, skillHover);

  if (isOverlayOpen) {
    setTimeout(() => {
      setOverlayAppear(true);
    }, 100);
  }

  const skillIconList = [
    {
      backgroundImg: `url(${skill1Icon})`,
      skillName: skillName1,
    },
    {
      backgroundImg: `url(${skill2Icon})`,
      skillName: skillName2,
    },
    {
      backgroundImg: `url(${skill3Icon})`,
      skillName: skillName3,
    },
  ];

  return (
    <div
      className="w-full xl:h-[100vh] bg-black/90 fixed z-50 flex justify-center items-center"
      onClick={() => {
        closeOverlay();
      }}
    >
      <div
        className={`w-[90%] lg:h-[80vh] ${
          !overlayAppear ? "opacity-0" : "opacity-100 fade-in-5ms"
        } bg-cover bg-center`}
        style={{
          backgroundImage: `url(
            ${heroBackground})`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full lg:h-[80vh] bg-[8B0000]/50">
          <div
            className={`w-full lg:h-[80vh] bg-black/70 grid grid-cols-[35%_30%_35%]`}
          >
            <CharacterDescriptionSection
              heroName={heroName || ""}
              heroSurname={heroSurname || ""}
              description={description || ""}
            />
            <div className="flex justify-center items-center">
              <img src={previewImage} className="lg:w-[70%]" />
            </div>
            <CharacterInfoPanel
              weaponImg={weaponImg || ""}
              weaponName={weaponName || ""}
              skillHover={skillHover}
              hp={hp}
              level={level}
              power={power}
              st={st}
              def={def}
              skillIconPreviewing={skillIconPreviewing || ""}
              showSkillDescription={showSkillDescription || ""}
              skillIconList={skillIconList}
              handleSkillHover={handleSkillHover}
              handleSkillLeave={handleSkillLeave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterOverlay;
