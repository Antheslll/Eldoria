import { useState, useEffect } from "react";

interface VerticalWorldHighlightsProps {
  isClick: string;
  handleClick: (highlights: string) => void;
}

const VerticalWorldHighlights = ({
  isClick,
  handleClick,
}: VerticalWorldHighlightsProps) => {
  const [descAppear, setDescAppear] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (isClick === "World") {
      setDisabled(true);
      setTimeout(() => {
        setDescAppear(true);
        setDisabled(false);
      }, 1000);
    } else {
      setDescAppear(false);
    }
  }, [isClick]);

  return (
    <button
      className={`w-full ${
        isClick === ""
          ? "md:h-[clamp(150px,30vh,1200px)] sm:h-[clamp(50px,30vh,400px)] h-[clamp(100px,30vh,800px)] "
          : isClick !== "World" && isClick !== ""
          ? "md:h-[clamp(75px,15vh,600px)] sm:h-[clamp(25px,15vh,300px)] h-[clamp(50px,15vh,400px)]"
          : "md:h-[clamp(300px,60vh,1500px)] sm:h-[clamp(100px,60vh,800px)] h-[clamp(200px,60vh,1600px)]"
      } bg-red-300 bg-cover bg-center bg-[url("/assets/home-page-assets/highlight-section-assets/world-highlights-image.png")] transition-all duration-1000 ease-in-out`}
      onClick={() => handleClick("World")}
      disabled={disabled}
    >
      <div className="w-full h-full radial-gradient">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h4
            className={`${
              isClick === "World" ? "md:mt-[10vh] sm:mt-[15vh] mt-[30vh]" : ""
            } text-white md:text-[8vw] sm:text-[5vw] text-[10vw] font-pirata text-center transition-all duration-1000 ease-in-out`}
          >
            Realms of Eloria
          </h4>
          <p
            className={`${
              descAppear
                ? "opacity-100 md:text-[1.7vw] sm:text-[1.3vw] text-[1.8vw]"
                : "opacity-0 md:text-[0.1vw] sm:text-[0.1vw] text-[0vw]"
            } text-white text-center pr-[10%] pl-[10%]  transition-all duration-300 ease-in-out`}
          >
            Between the starry skies and the land cracked by war, Eldoria stands
            as a world where legends are born, and destiny is shaped by courage
            and ancient magic. In this land, every shadow hides a secret, and
            every hero is bound by the weight of their own fate.
          </p>
        </div>
      </div>
    </button>
  );
};
export default VerticalWorldHighlights;
