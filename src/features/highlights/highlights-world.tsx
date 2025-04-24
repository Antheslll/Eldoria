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
    <div
      className={` ${
        isHover === "world"
          ? "highlight-x-hover w-[60%] slide-clip-custom-hover"
          : isHover === "character" || isHover === "story"
          ? "highlight-x-hover slide-clip-custom-non-hover w-[24%]"
          : "highlight-x-hover w-[35%] slide-clip-custom"
      } h-[500px] absolute bg-amber-200 z-50 bg-[url("/assets/home-page-assets/highlight-section-assets/world-highlights-image.png")] bg-cover bg-center`}
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
        } h-[500px] radial-gradient`}
      >
        <div
          className={`${
            isHover === "world" ? "highlights-text-background" : ""
          } w-full h-[500px] pt-3 flex justify-center items-end`}
        >
          <div className="w-[70%] h-[130px] ml-[-15.5%]">
            {(isHover === "world" || isHover === "") && (
              <h4
                className={` text-white text-[30px] font-pirata text-center ${
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
                } text-white text-[30px] font-pirata text-center rotate-285 ml-[20px] `}
              >
                Land of Eldoria
              </h4>
            )}

            {isHover === "world" && (
              <p className="text-white text-center text-[10px]">
                Between the starry skies and the land cracked by war, Eldoria
                stands as a world where legends are born, and destiny is shaped
                by courage and ancient magic. In this land, every shadow hides a
                secret, and every hero is bound by the weight of their own fate.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightWorld;
