import CharacterSectionRound from "./character-element/character-section-round";
import SkillIcon from "./character-element/skill-icon";
import { SkillIconType } from "./skill-icon-type";

// Props untuk CharacterSkillSection
interface CharacterSkillSectionProps {
  skillIconList: SkillIconType[];
  handleSkillHover: (skillName: string) => void;
  handleSkillLeave: () => void;
}

const CharacterSkillSection = ({
  skillIconList,
  handleSkillHover,
  handleSkillLeave,
}: CharacterSkillSectionProps) => {
  return (
    <div className="bg-black/30 grid grid-cols-[25%_25%_25%_25%]">
      <div className="flex justify-center items-center">
        <CharacterSectionRound>
          <h4 className="text-[30px] text-white font-grover">Skills</h4>
        </CharacterSectionRound>
      </div>
      {skillIconList.map((skill) => (
        <SkillIcon
          backgroundImg={skill.backgroundImg}
          skillName={skill.skillName}
          handleSkillHover={handleSkillHover}
          handleSkillLeave={handleSkillLeave}
        />
      ))}
    </div>
  );
};

export default CharacterSkillSection;
