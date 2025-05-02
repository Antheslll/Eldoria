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
    <div className="bg-black/30 grid grid-cols-[30%_70%]">
      <div className="w-full lg:h-[75px] flex justify-center items-center">
        <CharacterSectionRound>
          <img src={weaponImg} className="w-[100%] " />
        </CharacterSectionRound>
      </div>
      <div className=" flex items-center">
        <div className="leading-[1.25]">
          <p className="text-[10px] roboto-bold text-white">Weapon</p>
          <h2 className="text-[25px] text-white">{weaponName}</h2>
        </div>
      </div>
    </div>
  );
};

export default CharacterWeaponSection;
