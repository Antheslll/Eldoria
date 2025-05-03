import useWindowSize from "../../../hooks/useWindowSize";
import CharacterDetailsSection from "./character-details-section";
import CharacterSkillSection from "./character-skill-section";
import CharacterWeaponSection from "./character-weapon-section";
import { SkillIconType } from "./skill-icon-type";

interface CharacterInfoPanelProps {
  weaponImg: string;
  weaponName: string;
  skillHover: string;
  hp: number;
  level: number;
  power: number;
  st: number;
  def: number;
  skillIconPreviewing: string;
  showSkillDescription: string;
  skillIconList: SkillIconType[];
  handleSkillHover: (skillName: string) => void;
  handleSkillLeave: () => void;
}

const CharacterInfoPanel = ({
  weaponImg,
  weaponName,
  skillHover,
  hp,
  level,
  power,
  st,
  def,
  skillIconPreviewing,
  showSkillDescription,
  skillIconList,
  handleSkillHover,
  handleSkillLeave,
}: CharacterInfoPanelProps) => {
  const { width } = useWindowSize();
  return (
    <div className=" flex justify-center items-center ">
      {/* h-[7vh] */}
      <div className="sm:w-[80%] w-[95%] lg:h-[60vh] md:h-[30vh] sm:h-[70vh] h-[30vh] grid gap-y-[10px] lg:grid-rows-[12vh_35vh_10vh] md:grid-rows-[7vh_23vh] sm:grid-rows-[14vh_40vh_10vh]">
        <CharacterWeaponSection weaponImg={weaponImg} weaponName={weaponName} />
        <CharacterDetailsSection
          skillHover={skillHover}
          hp={hp}
          level={level}
          power={power}
          st={st}
          def={def}
          skillIconPreviewing={skillIconPreviewing}
          showSkillDescription={showSkillDescription}
        />
        {width > 1024 && (
          <CharacterSkillSection
            skillIconList={skillIconList}
            handleSkillHover={handleSkillHover}
            handleSkillLeave={handleSkillLeave}
          />
        )}
        {width > 640 && width < 768 && (
          <CharacterSkillSection
            skillIconList={skillIconList}
            handleSkillHover={handleSkillHover}
            handleSkillLeave={handleSkillLeave}
          />
        )}
      </div>
    </div>
  );
};

export default CharacterInfoPanel;
