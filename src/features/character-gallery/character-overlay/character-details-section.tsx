import CharacterSectionRound from "./character-element/character-section-round";
import CharacterStatusPoint from "./character-status-point";
interface CharacterDetailsSection {
  skillHover: string;
  level: number;
  hp: number;
  st: number;
  power: number;
  def: number;
  skillIconPreviewing: string;
  showSkillDescription: string;
}

const CharacterDetailsSection = ({
  skillHover,
  level,
  hp,
  st,
  power,
  def,
  skillIconPreviewing,
  showSkillDescription,
}: CharacterDetailsSection) => {
  return (
    <>
      {skillHover === "" ? (
        <CharacterStatusPoint
          level={level}
          hp={hp}
          power={power}
          st={st}
          def={def}
        />
      ) : (
        <div className="bg-black/30 grid grid-rows-[90px_140px]">
          <div className="grid grid-cols-[30%_70%]">
            <div className="flex justify-center items-center">
              <CharacterSectionRound>
                <img
                  src={skillIconPreviewing}
                  className="w-[80%] rounded-full"
                />
              </CharacterSectionRound>
            </div>
            <div className="flex items-center">
              <h4 className="text-white text-[20px] fell-english">
                {skillHover}
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[90%] h-[130px] bg-black/70 p-3">
              <p className="text-white text-[12px] text-justify">
                {showSkillDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterDetailsSection;
