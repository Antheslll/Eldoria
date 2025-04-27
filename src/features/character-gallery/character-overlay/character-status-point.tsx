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
  return (
    <div className="bg-black/30 grid grid-rows-[90px_70px_70px]">
      <div className=" grid grid-cols-[30%_70%] ">
        <div className="flex justify-center items-center">
          <div className="w-full h-[75px] flex justify-center items-center">
            <CharacterSectionRound>
              <h4 className="text-[50px] text-white font-grover">{level}</h4>
            </CharacterSectionRound>
          </div>
        </div>
        <div className="pt-[15px]">
          <CharacterLevelBar level={level} />
        </div>
      </div>
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
    </div>
  );
};

export default CharacterStatusPoint;
