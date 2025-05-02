import { useEffect, useState } from "react";

interface VerticalCharacterHighlightsProps {
  isClick: string;
  handleClick: (highlights: string) => void;
}

const VerticalCharacterHighlights = ({
  isClick,
  handleClick,
}: VerticalCharacterHighlightsProps) => {
  const [descAppear, setDescAppear] = useState(false);

  useEffect(() => {
    if (isClick === "Character") {
      setTimeout(() => {
        setDescAppear(true);
      }, 1000);
    } else {
      setDescAppear(false);
    }
  }, [isClick]);

  return (
    <div
      className={`w-full ${
        isClick === ""
          ? "md:h-[clamp(150px,30vh,1200px)] sm:h-[clamp(50px,30vh,400px)] h-[clamp(100px,30vh,800px)] "
          : isClick !== "Character" && isClick !== ""
          ? "md:h-[clamp(75px,15vh,600px)] sm:h-[clamp(25px,15vh,300px)] h-[clamp(50px,15vh,400px)]"
          : "md:h-[clamp(300px,60vh,1500px)] sm:h-[clamp(100px,60vh,800px)] h-[clamp(200px,60vh,1600px)]"
      } bg-blue-300 bg-[url("/assets/home-page-assets/highlight-section-assets/character-highlights-image.png")] bg-cover bg-center transition-all duration-1000 ease-in-out`}
      onClick={() => handleClick("Character")}
    >
      <div className="w-full h-full radial-gradient">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h4
            className={`${
              isClick === "Character"
                ? "md:mt-[10vh] sm:mt-[15vh] mt-[30vh]"
                : ""
            } text-white md:text-[8vw] sm:text-[5vw] text-[10vw] font-pirata text-center transition-all duration-1000 ease-in-out`}
          >
            Legend & Souls
          </h4>

          <p
            className={`${
              descAppear
                ? "opacity-100 md:text-[1.7vw] sm:text-[1.3vw] text-[1.8vw]"
                : "opacity-0 md:text-[0.1vw] sm:text-[0.1vw] text-[0vw]"
            } text-white text-center pr-[10%] pl-[10%]  transition-all duration-300 ease-in-out`}
          >
            Behind the burning eyes lies a story of scars, ambition, and
            promises left unfulfilled. They are not just figures—they are the
            echoes of blood that still beats within the shadows of history.
            Behold them, the makers of legends who live on in silence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalCharacterHighlights;
