import { Link } from "react-router-dom";

interface HighlightStoryProps {
  isHover: string;
  setIsHover: (value: string) => void;
  hoverGrab: string;
  handleGrab: (value: string) => void;
}

const HighlightStory = ({
  isHover,
  setIsHover,
  hoverGrab,
  handleGrab,
}: HighlightStoryProps) => {
  return (
    <Link
      to="/storypage"
      className={`${
        isHover === "world" || isHover === "character"
          ? "highlight-x-hover slide-clip-custom-non-hover w-[24%] ml-[59.5%]"
          : isHover === "story"
          ? "highlight-x-hover w-[60%] slide-clip-custom-hover ml-[23%]"
          : "highlight-x-hover w-[35%] slide-clip-custom ml-[48%]"
      }  h-[500px] absolute  bg-blue-200 z-20 bg-[url("/assets/home-page-assets/highlight-section-assets/story-highlights-image.png")] bg-cover bg-center`}
      onMouseEnter={() => {
        setIsHover("story");
        handleGrab("world");
      }}
      onMouseLeave={() => {
        setIsHover("");
        handleGrab("");
      }}
    >
      <div
        className={`${
          isHover === "world" || isHover === "character"
            ? " slide-clip-custom-non-hover w-full"
            : isHover === "story"
            ? "slide-clip-custom-hover"
            : "w-full slide-clip-custom "
        }  h-[500px] radial-gradient `}
      >
        <div
          className={`${
            isHover === "story" ? "highlights-text-background" : ""
          } w-full h-[500px] pt-3 flex justify-center items-end`}
        >
          <div className="w-[70%] h-[130px] ml-[-15.5%]">
            {(isHover === "story" || isHover === "") && (
              <h4
                className={` text-white text-[30px] font-pirata text-center ${
                  hoverGrab === "character" ||
                  hoverGrab === "" ||
                  hoverGrab === "world"
                    ? "fade-in"
                    : "fade-out"
                }`}
              >
                Tales of Etheria
              </h4>
            )}

            {(isHover === "character" || isHover === "world") && (
              <h4
                className={`${
                  hoverGrab !== "story" ? "fade-in" : "fade-out"
                } w-full text-white text-[30px] font-pirata text-center rotate-285 ml-[20px] `}
              >
                Tales of Etheria
              </h4>
            )}

            {isHover === "story" && (
              <p className="text-white text-center text-[10px]">
                The holy sword, forged from shattered stars, waits for the soul
                worthy to wield it. Within the Celestial Void, its story echoes,
                awaiting a fate that will shatter eternity. Those who dare seek
                it will face a destiny beyond the fabric of time itself.
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HighlightStory;
