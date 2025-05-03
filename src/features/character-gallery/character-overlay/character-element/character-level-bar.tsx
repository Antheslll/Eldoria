import { useEffect, useState } from "react";

interface CharacterLevelBarProps {
  level: number;
}

const CharacterLevelBar = ({ level }: CharacterLevelBarProps) => {
  const [fillingBar, setFillingBar] = useState(false);

  useEffect(() => {
    setFillingBar(true);
  }, []);
  const point = level * 1000;
  const theWidth = (point / 100000) * 100;
  return (
    <div className="lg:h-[8vh] sm:h-[15vh] h-[5vh] grid lg:grid-rows-[4.5vh_2.5vh_1.25vh] md:grid-rows-[1.5vh_2.8vh_1vh] sm:grid-rows-[7vh_2.8vh_1vh] grid-rows-[2.7vh_1vh_1vh]">
      <div>
        <span className="text-white roboto-bold lg:text-[1vw] md:text-[1.3vw] sm:text-[1.3vw] text-[2vw]">
          Level {level}
        </span>
      </div>
      <div className="flex items-center">
        <div className="w-[87%] lg:h-[2.5vh] md:h-[1.3vh] sm:h-[2vh] bg-white">
          <div
            className=" lg:h-[2.5vh] md:h-[1.3vh] sm:h-[2vh] h-[1vh] bg-red-500 transition-all ease-in-out duration-2000"
            style={{ width: `${fillingBar ? theWidth : 0}%` }}
          ></div>
        </div>
      </div>
      <div className="w-[87%] flex justify-end">
        <span className="lg:text-[0.5vw] md:text-[0.8vw] sm:text-[0.8vw] text-[1.2vw] roboto-bold text-white ">
          {point}/100000
        </span>
      </div>
    </div>
  );
};

export default CharacterLevelBar;
