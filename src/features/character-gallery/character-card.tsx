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
    <div className="card" onClick={() => openOverlay(name)}>
      <div className="wrapper">
        <img src={coverImage} className="cover-image" />
      </div>
      <img src={title} className="title" />
      <img src={character} className="character" />
    </div>
  );
};

export default CharacterCard;
