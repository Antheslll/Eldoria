import { valdenarHero } from "../../../data/valdenar-hero";
import { nirvalisHero } from "../../../data/nirvalis-hero";
import { sylvaraHero } from "../../../data/sylvara-hero";
import { dravakhorHero } from "../../../data/dravakhor-hero";
import { riftlandHero } from "../../../data/riftland-hero";
import { useState } from "react";
import CharacterDescriptionSection from "./character-description-section";
import CharacterWeaponSection from "./character-weapon-section";
import CharacterDetailsSection from "./character-details-section";
import CharacterSkillSection from "./character-skill-section";
import { useCharacterData } from "../../../hooks/useCharacterData";

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
      className="w-full h-full bg-black/90 fixed z-50 flex justify-center items-center"
      onClick={() => {
        closeOverlay();
      }}
    >
      <div
        className={`w-[90%] h-[550px] ${
          !overlayAppear ? "opacity-0" : "opacity-100 fade-in-5ms"
        } bg-cover bg-center`}
        style={{
          backgroundImage: `url(
            ${heroBackground})`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-[550px] bg-[8B0000]/50">
          <div
            className={`w-full h-[550px] bg-black/70 grid grid-cols-[35%_30%_35%]`}
          >
            <CharacterDescriptionSection
              heroName={heroName || ""}
              heroSurname={heroSurname || ""}
              description={description || ""}
            />
            <div className="flex justify-center items-center">
              <img src={previewImage} className="w-[70%]" />
            </div>
            <div className=" flex justify-center items-center">
              <div className="w-[80%] h-[400px] grid gap-y-[10px] grid-rows-[75px_230px_75px] ">
                <CharacterWeaponSection
                  weaponImg={weaponImg || ""}
                  weaponName={weaponName || ""}
                />
                <CharacterDetailsSection
                  skillHover={skillHover}
                  hp={hp}
                  level={level}
                  power={power}
                  st={st}
                  def={def}
                  skillIconPreviewing={skillIconPreviewing || ""}
                  showSkillDescription={showSkillDescription || ""}
                />
                <CharacterSkillSection
                  skillIconList={skillIconList}
                  handleSkillHover={handleSkillHover}
                  handleSkillLeave={handleSkillLeave}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterOverlay;
