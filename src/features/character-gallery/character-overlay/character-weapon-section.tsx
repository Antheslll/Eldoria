import CharacterSectionRound from "./character-element/character-section-round";

interface CharacterWeaponSectionProps {
  weaponImg: string;
  weaponName: string;
}
const CharacterWeaponSection = ({
  weaponImg,
  weaponName,
}: CharacterWeaponSectionProps) => {
  return (
    <div className="bg-black/30 grid grid-cols-[30%_70%] sm:h-auto h-[10vh]">
      <div className="w-full lg:h-[12vh] md:h-[7vh] sm:h-[14vh] h-[10vh] flex justify-center items-center ">
        <CharacterSectionRound>
          <img src={weaponImg} className="w-[100%] " />
        </CharacterSectionRound>
      </div>
      <div className=" flex items-center">
        <div className="leading-[1.25]">
          <p className="lg:text-[0.9vw] md:text-[1.5vw] sm:text-[1vw] text-[2vw] roboto-bold text-white">
            Weapon
          </p>
          <h2 className="lg:text-[1.8vw] md:text-[2.5vw] sm:text-[2vw] text-[3.5vw] text-white">
            {weaponName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CharacterWeaponSection;
