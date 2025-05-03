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
        <div className="bg-black/30 grid lg:grid-rows-[10vh_23vh] md:grid-rows-[5vh_15vh] sm:grid-rows-[15vh_20vh] grid-rows-[6vh_18vh]">
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
              <h4 className="text-white lg:text-[1.5vw] md:text-[2.5vw] sm:text-[2vw] text-[3vw] fell-english">
                {skillHover}
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[90%] lg:h-[17vh] md:h-[12vh] sm:h-[20vh] h-[15vh] bg-black/70 p-3">
              <p className="text-white lg:text-[0.8vw] md:text-[1.5vw] sm:text-[1vw] text-[2vw] text-justify">
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
