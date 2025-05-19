import { useState } from "react";
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
  const [textAppear, setTextAppear] = useState(false);

  if (isHover === "character") {
    setTimeout(() => {
      setTextAppear(true);
    }, 500);
  } else if (isHover !== "character") {
    setTextAppear(false);
  }

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
      } xl:h-[clamp(500px,80vh,800px)] absolute  bg-red-200 z-30 bg-[url("/assets/home-page-assets/highlight-section-assets/character-highlights-image.png")] bg-cover bg-center`}
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
        } xl:h-[clamp(500px,80vh,800px)] lg:h-[clamp(500px,70vh,800px)] radial-gradient`}
      >
        <div
          className={`${
            isHover === "character" ? "highlights-text-background" : ""
          } xl:h-[clamp(500px,80vh,800px)] lg:h-[clamp(500px,70vh,800px)] pt-3 flex justify-center items-end`}
        >
          <div className="w-[70%] xl:h-[clamp(130px,15vh,300px)] lg:h-[clamp(130px,15vh,300px)] ml-[-15.5%]">
            {(isHover === "character" || isHover === "") && (
              <h4
                className={` text-white xl:text-[3vw] lg:text-[2.5vw] font-pirata text-center ${
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
                } text-white xl:text-[2.5vw] lg:text-[2.5vw] font-pirata text-center rotate-285 ml-[20px] `}
              >
                Legend & Souls
              </h4>
            )}

            {isHover === "character" && textAppear && (
              <p className="text-white text-center xl:text-[0.8vw] lg:text-[0.8vw]">
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
