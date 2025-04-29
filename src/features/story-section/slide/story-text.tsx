import { Ornament } from "../front-cover/top-ornament";
import NavigationSlideButton from "./navigation-slide-button";

interface StoryTextProps {
  slideText: string;
  prev: string;
  next: string;

  handleSlide: (slide: string) => void;
}

const StoryText = ({ slideText, prev, next, handleSlide }: StoryTextProps) => {
  return (
    <div className={` w-full h-full flex justify-center`}>
      <div className="w-[90%] h-[35vh] rounded-[18px] bg-white/10 backdrop-blur-sm grid grid-rows-[5vh_23vh_7vh]">
        <div className="centered-positioning">
          <div className="scale-[30%]">
            <Ornament />
          </div>
        </div>
        <div className="pl-10 pr-10 pt-3">
          <p className="text-white  font-eb-garamond text-[12px] text-justify whitespace-pre-line">
            {slideText}
          </p>
        </div>
        <div className="flex justify-between items-center pl-10 pr-10">
          <NavigationSlideButton
            nav={prev}
            handleSlide={handleSlide}
            text="prev"
          />
          <NavigationSlideButton
            nav={next}
            handleSlide={handleSlide}
            text="next"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryText;
