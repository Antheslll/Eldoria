interface CharacterLevelBarProps {
  level: number;
}

const CharacterLevelBar = ({ level }: CharacterLevelBarProps) => {
  const point = level * 1000;
  const theWidth = (point / 100000) * 100;
  return (
    <div className="h-[60px]  grid grid-rows-[20px_30px_10px]">
      <div>
        <span className="text-white roboto-bold text-[15px]">
          Level {level}
        </span>
      </div>
      <div className="flex items-center">
        <div className="w-[87%] h-[18px] bg-white">
          <div
            className=" h-[18px] bg-red-500"
            style={{ width: `${theWidth}%` }}
          ></div>
        </div>
      </div>
      <div className="w-[87%] flex justify-end">
        <span className="text-[7px] roboto-bold text-white ">
          {point}/100.000
        </span>
      </div>
    </div>
  );
};

export default CharacterLevelBar;
