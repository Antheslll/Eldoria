import useWindowSize from "../../../hooks/useWindowSize";
import CharacterAtributBar from "./character-element/character-atribut-bar";
import CharacterLevelBar from "./character-element/character-level-bar";
import CharacterSectionRound from "./character-element/character-section-round";

interface CharacterStatusPointPropsType {
  level: number;
  hp: number;
  power: number;
  st: number;
  def: number;
}

const CharacterStatusPoint = ({
  level,
  hp,
  power,
  st,
  def,
}: CharacterStatusPointPropsType) => {
  const { width } = useWindowSize();
  return (
    <div className="bg-black/30 grid lg:grid-rows-[14vh_9vh_9vh] sm:grid-rows-[17vh_9vh_9vh] md:grid-rows-[8vh_18vh] grid-rows-[8vh_20vh] sm:h-auto md:h-[30vh] lg:h-auto h-[25vh] ">
      <div className="grid grid-cols-[30%_70%]">
        <div className="flex justify-center items-center  ">
          <div className="w-full flex justify-center items-center md:mb-[9vh]">
            <CharacterSectionRound>
              <h4 className="lg:text-[4vw] md:text-[5.5vw] sm:text-[4vw] text-[7vw] text-white font-grover">
                {level}
              </h4>
            </CharacterSectionRound>
          </div>
        </div>
        <div className="lg:pt-[clamp(15px,2.5vh,50px)] md:pt-[clamp(15px,1.5vh,30px)] sm:pt-[clamp(5px,2vh,15px)] pt-[clamp(5px,1vh,40px)]">
          <CharacterLevelBar level={level} />
        </div>
      </div>
      {(width > 640 && width < 768) || width > 1024 ? (
        <>
          <div className=" grid grid-cols-2">
            <CharacterAtributBar
              attribute="HP ❤️"
              attributeColor="bg-[#FF3E3E]"
              point={hp}
            />
            <CharacterAtributBar
              attribute="Power ⚡"
              attributeColor="bg-[#FFD700]"
              point={power}
            />
          </div>
          <div className="grid grid-cols-2">
            <CharacterAtributBar
              attribute="Strength 💪"
              attributeColor="bg-[#66CCFF]"
              point={st}
            />
            <CharacterAtributBar
              attribute="Defense 🛡️"
              attributeColor="bg-[#7F8A8F]"
              point={def}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-1">
          <CharacterAtributBar
            attribute="HP ❤️"
            attributeColor="bg-[#FF3E3E]"
            point={hp}
          />
          <CharacterAtributBar
            attribute="Power ⚡"
            attributeColor="bg-[#FFD700]"
            point={power}
          />
          <CharacterAtributBar
            attribute="Strength 💪"
            attributeColor="bg-[#66CCFF]"
            point={st}
          />
          <CharacterAtributBar
            attribute="Defense 🛡️"
            attributeColor="bg-[#7F8A8F]"
            point={def}
          />
        </div>
      )}
    </div>
  );
};

export default CharacterStatusPoint;
