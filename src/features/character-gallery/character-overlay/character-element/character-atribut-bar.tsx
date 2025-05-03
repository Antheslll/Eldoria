import { useEffect, useState } from "react";

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
  const [fillingBar, setFillingBar] = useState(false);

  useEffect(() => {
    setFillingBar(true);
  }, []);
  return (
    <div className="pl-[10%]">
      <div className="lg:h-[8.5vh] grid lg:grid-rows-[2.5vh_2.5vh_1.25vh] md:grid-rows-[1vh_2vh_1vh] sm:grid-rows-[2vh_3vh_2vh] grid-rows-[1vh_1vh_1vh]">
        <div className="flex items-center">
          <span className="text-white roboto-bold lg:text-[0.8vw] md:text-[1.5vw] sm:text-[1vw] text-[2vw]">
            {attribute}
          </span>
        </div>
        <div className="flex items-center">
          <div className="sm:w-[80%] md:w-[90%] lg:w-[80%] w-[90%] lg:h-[2vh] md:h-[1.5vh] sm:h-[2vh] h-[1vh] bg-white">
            <div
              className={`lg:h-[2vh] md:h-[1.5vh] sm:h-[2vh] h-[1vh] ${attributeColor} transition-all ease-in-out duration-2000`}
              style={{ width: `${fillingBar ? theWidth : 0}%` }}
            ></div>
          </div>
        </div>
        <div className="sm:w-[80%] md:w-[90%] lg:w-[80%] w-[90%] flex justify-end">
          <span className="lg:text-[0.5vw] md:text-[0.8vw] sm:text-[0.7vw] text-[0.8vw] roboto-bold text-white ">
            {point}/4000
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterAtributBar;
