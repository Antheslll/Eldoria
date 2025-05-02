import { Link } from "react-router-dom";

interface HighlightWorldProps {
  isHover: string;
  setIsHover: (value: string) => void;
  hoverGrab: string;
}

const HighlightWorld = ({
  isHover,
  setIsHover,
  hoverGrab,
}: HighlightWorldProps) => {
  return (
    <Link
      to="/worldpage"
      className={` ${
        isHover === "world"
          ? "highlight-x-hover w-[60%] slide-clip-custom-hover"
          : isHover === "character" || isHover === "story"
          ? "highlight-x-hover slide-clip-custom-non-hover w-[24%]"
          : "highlight-x-hover w-[35%] slide-clip-custom"
      } xl:h-[clamp(500px,80vh,800px)] lg:h-[clamp(500px,70vh,800px)] absolute z-50 bg-[url("/assets/home-page-assets/highlight-section-assets/world-highlights-image.png")] bg-cover bg-center`}
      onMouseEnter={() => {
        setIsHover("world");
      }}
      onMouseLeave={() => setIsHover("")}
    >
      <div
        className={` ${
          isHover === "world"
            ? "slide-clip-custom-hover"
            : isHover === "character" || isHover === "story"
            ? "slide-clip-custom-non-hover w-full"
            : "w-full ml-[-1px] slide-clip-custom"
        } xl:h-[clamp(500px,80vh,800px)] lg:h-[clamp(500px,70vh,800px)] radial-gradient`}
      >
        <div
          className={`${
            isHover === "world" ? "highlights-text-background" : ""
          } w-full xl:h-[clamp(500px,80vh,800px)] lg:h-[clamp(500px,70vh,800px)] pt-3 flex justify-center items-end`}
        >
          <div className="w-[70%] xl:h-[clamp(130px,18vh,300px)] lg:h-[clamp(130px,15vh,300px)] ml-[-15.5%]">
            {(isHover === "world" || isHover === "") && (
              <h4
                className={` text-white xl:text-[3vw] lg:text-[2.5vw] font-pirata text-center ${
                  hoverGrab === "character" ||
                  hoverGrab === "" ||
                  hoverGrab === "story"
                    ? "fade-in"
                    : "fade-out"
                }`}
              >
                Land of Eldoria
              </h4>
            )}

            {(isHover === "character" || isHover === "story") && (
              <h4
                className={`${
                  hoverGrab === "world" ? "fade-in" : "fade-out"
                } text-white xl:text-[2.5vw] lg:text-[2.5vw] font-pirata text-center rotate-285 ml-[1vw] `}
              >
                Land of Eldoria
              </h4>
            )}

            {isHover === "world" && (
              <p className="text-white text-center xl:text-[0.8vw] lg:text-[0.8vw]">
                Between the starry skies and the land cracked by war, Eldoria
                stands as a world where legends are born, and destiny is shaped
                by courage and ancient magic. In this land, every shadow hides a
                secret, and every hero is bound by the weight of their own fate.
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HighlightWorld;
