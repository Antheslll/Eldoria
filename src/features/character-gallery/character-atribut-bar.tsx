interface CharacterAtributBarPropsType {
  attribute: string;
  attributeColor: string;
  point: number;
}

const CharacterAtributBar = ({
  attribute,
  attributeColor,
  point,
}: CharacterAtributBarPropsType) => {
  const theWidth = (point / 4000) * 100;
  return (
    <div className="pl-[10%]">
      <div className="h-[60px]  grid grid-rows-[20px_20px_10px]">
        <div className="flex items-center">
          <span className="text-white roboto-bold text-[10px]">
            {attribute}
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-[80%] h-[15px] bg-white">
            <div
              className={` h-[15px] ${attributeColor}`}
              style={{ width: `${theWidth}%` }}
            ></div>
          </div>
        </div>
        <div className="w-[80%] flex justify-end">
          <span className="text-[7px] roboto-bold text-white ">
            {point}/4000
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterAtributBar;
