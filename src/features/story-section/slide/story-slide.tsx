import LogoOnSlide from "./logo-on-slide";
import StoryText from "./story-text";

interface StorySlideProps {
  backgroundImg: string;
  slideText: string;
  prev: string;
  next: string;
  slideNow: string;
  slideName: string;
  slideAppear: string;
  handleSlide: (slide: string) => void;
}

const StorySlide = ({
  backgroundImg,
  slideText,
  prev,
  next,
  slideNow,
  slideName,
  slideAppear,
  handleSlide,
}: StorySlideProps) => {
  return (
    <div
      className={`${slideNow === slideName ? "" : "hidden"} ${
        slideAppear === slideName ? "opacity-100" : "opacity-0"
      } w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="w-full h-full bg-black/30 grid grid-rows-[20vh_40vh_40vh]">
        <LogoOnSlide />
        <div></div>
        <StoryText
          slideText={slideText}
          prev={prev}
          next={next}
          handleSlide={handleSlide}
        />
      </div>
    </div>
  );
};

export default StorySlide;
