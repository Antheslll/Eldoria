import { Link } from "react-router-dom";

interface HighlightCharacterProps {
  isHover: string;
  setIsHover: (value: string) => void;
  hoverGrab: string;
  handleGrab: (value: string) => void;
}
const HighlightCharacter = ({
  isHover,
  setIsHover,
  hoverGrab,
  handleGrab,
}: HighlightCharacterProps) => {
  return (
    <Link
      to="characterpage"
      className={`${
        isHover === "world"
          ? "highlight-x-hover slide-clip-custom-non-hover w-[24%] ml-[48%]"
          : isHover === "character"
          ? "highlight-x-hover w-[60%] slide-clip-custom-hover ml-[11.5%]"
          : isHover === "story"
          ? "highlight-x-hover slide-clip-custom-non-hover w-[24%] ml-[12%]"
          : "highlight-x-hover w-[35%] slide-clip-custom ml-[24%]"
      } h-[500px] absolute  bg-red-200 z-30 bg-[url("/assets/home-page-assets/highlight-section-assets/character-highlights-image.png")] bg-cover bg-center`}
      onMouseEnter={() => {
        setIsHover("character");
        handleGrab("world");
      }}
      onMouseLeave={() => {
        setIsHover("");
        handleGrab("");
      }}
    >
      <div
        className={`${
          isHover === "world"
            ? " slide-clip-custom-non-hover w-full "
            : isHover === "character"
            ? " slide-clip-custom-hover"
            : isHover === "story"
            ? "slide-clip-custom-non-hover w-full"
            : "w-full slide-clip-custom "
        } h-[500px] radial-gradient`}
      >
        <div
          className={`${
            isHover === "character" ? "highlights-text-background" : ""
          } w-full h-[500px] pt-3 flex justify-center items-end`}
        >
          <div className="w-[70%] h-[130px] ml-[-15.5%]">
            {(isHover === "character" || isHover === "") && (
              <h4
                className={` text-white text-[30px] font-pirata text-center ${
                  hoverGrab === "world" ||
                  hoverGrab === "" ||
                  hoverGrab === "story"
                    ? "fade-in"
                    : "fade-out"
                }`}
              >
                Legend & Souls
              </h4>
            )}

            {(isHover === "world" || isHover === "story") && (
              <h4
                className={`${
                  hoverGrab !== "character" ? "fade-in" : "fade-out"
                } text-white text-[30px] font-pirata text-center rotate-285 ml-[20px] `}
              >
                Legend & Souls
              </h4>
            )}

            {isHover === "character" && (
              <p className="text-white text-center text-[10px]">
                Behind the burning eyes lies a story of scars, ambition, and
                promises left unfulfilled. They are not just figures—they are
                the echoes of blood that still beats within the shadows of
                history. Behold them, the makers of legends who live on in
                silence.
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HighlightCharacter;
