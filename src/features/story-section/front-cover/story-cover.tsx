import "../../../styles/story.css";
import BottomOrnament from "./botton-ornament";
import StoryHeaderCover from "./header";
import StartButton from "./start-button";
import StorySubheaderFrontCover from "./subheader";
import TopOrnament from "./top-ornament";

interface StoryCoverProps {
  slideNow: string;
  slideAppear: string;
  text: string;
  handleSlide: (slide: string) => void;
}

const StoryCover = ({
  slideNow,
  handleSlide,
  slideAppear,
  text,
}: StoryCoverProps) => {
  return (
    <div
      className={`${slideNow === "front-cover" ? "" : "hidden"} ${
        slideAppear === "front-cover" ? "opacity-100" : "opacity-0"
      } transition-all duration-500 ease-in-out w-full h-full bg-cover bg-center`}
      style={{ backgroundImage: `url("/assets/story-page-asset/cover.png")` }}
    >
      <div className="w-full h-full bg-black/60 centered-positioning ">
        <div className=" w-[60%] h-[60vh] grid grid-rows-[50px_100px_40px_50px_60px]">
          <TopOrnament />
          <StoryHeaderCover text={text} />
          <BottomOrnament />
          <StorySubheaderFrontCover />
          <StartButton handleSlide={handleSlide} />
        </div>
      </div>
    </div>
  );
};

export default StoryCover;
