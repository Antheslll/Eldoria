interface CharacterCardPropsType {
  coverImage: string;
  title: string;
  character: string;
  name: string;
  openOverlay: (heroName: string) => void;
}

const CharacterCard = ({
  coverImage,
  title,
  name,
  character,
  openOverlay,
}: CharacterCardPropsType) => {
  return (
    <div
      className="card xl:h-[30vw] xl:w-[15vw] lg:w-[15vw] lg:h-[30vw] md:w-[20vw] md:h-[40vw] sm:w-[20vw] sm:h-[40vw] w-[25vw] h-[50vw]"
      onClick={() => openOverlay(name)}
    >
      <div className="wrapper">
        <img src={coverImage} className="cover-image" />
      </div>
      <img src={title} className="title" />
      <img src={character} className="character" />
    </div>
  );
};

export default CharacterCard;
