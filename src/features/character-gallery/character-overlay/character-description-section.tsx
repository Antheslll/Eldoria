interface CharacterDescriptionSectionProps {
  heroName: string;
  heroSurname: string;
  description: string;
}

const CharacterDescriptionSection = ({
  heroName,
  heroSurname,
  description,
}: CharacterDescriptionSectionProps) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="character-description-background text-white w-[80%] h-[400px] pt-5 pl-3 pr-3">
        <h2 className="text-[30px]">{heroName}</h2>
        <h3 className="text-[15px]">{heroSurname}</h3>
        <br />
        <p className="text-white text-[11px] text-justify">{description}</p>
      </div>
    </div>
  );
};

export default CharacterDescriptionSection;
