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
  return (
    <div className=" flex justify-center items-center">
      <div className="w-[80%] lg:h-[clamp(600px,53vh,700px)] grid gap-y-[10px] lg:grid-rows-[10vh_30vh_10vh] ">
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
        <CharacterSkillSection
          skillIconList={skillIconList}
          handleSkillHover={handleSkillHover}
          handleSkillLeave={handleSkillLeave}
        />
      </div>
    </div>
  );
};

export default CharacterInfoPanel;
