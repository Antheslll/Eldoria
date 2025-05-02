import "../../../styles/story.css";
import StoryHeaderCover from "../front-cover/header";

interface StoryCoverProps {
  slideNow: string;
  slideAppear: string;
  text: string;
  handleSlide: (slide: string) => void;
}

const StoryBackCover = ({
  slideNow,
  handleSlide,
  slideAppear,
  text,
}: StoryCoverProps) => {
  return (
    <div
      className={`${slideNow === "back-cover" ? "" : "hidden"} ${
        slideAppear === "back-cover" ? "opacity-100" : "opacity-0"
      } transition-all duration-500 ease-in-out w-full h-full bg-cover bg-center`}
      style={{
        backgroundImage: `url("/assets/story-page-asset/cover-back.png")`,
      }}
    >
      <div className="w-full h-full bg-black/60 centered-positioning ">
        <div className="  w-[60%] lg:h-[60vh] grid lg:grid-rows-[30vh_10vh]">
          <StoryHeaderCover text={text} />
          <div className="w-full centered-positioning">
            <button
              className="lg:w-[15vw] lg:h-[4vw] lg:text-[2vw] font-pirata border-2 border-white text-white rounded-[8px] cursor-pointer"
              onClick={() => {
                handleSlide("front-cover");
              }}
            >
              Read Again!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryBackCover;
