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
    <div className=" flex justify-center items-center md:h-full h-full">
      <div className="character-description-background text-white lg:w-[80%] sm:w-[80%] lg:h-[60vh] sm:h-[70vh]  md:w-full md:h-full w-full h-full pt-5 lg:pl-3 lg:pr-5 md:pl-3 md:pr-3 sm:pl-3 sm:pr-3 pl-3  pr-3">
        <h2 className="lg:text-[2.3vw] md:text-[5vw] sm:text-[2vw] text-[6vw]">
          {heroName}
        </h2>
        <h3 className="lg:text-[1.15vw] md:text-[3vw] sm:text-[1.5vw] text-[3vw]">
          {heroSurname}
        </h3>
        <br />
        <p className="text-white lg:text-[0.8vw] md:text-[1.3vw] sm:text-[0.9vw] text-[1.5vw] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CharacterDescriptionSection;
