import { useEffect, useState } from "react";

interface VerticalStoryHighlightsProps {
  isClick: string;
  handleClick: (highlights: string) => void;
}

const VerticalStoryHighlights = ({
  isClick,
  handleClick,
}: VerticalStoryHighlightsProps) => {
  const [descAppear, setDescAppear] = useState(false);

  useEffect(() => {
    if (isClick === "Story") {
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
          : isClick !== "Story" && isClick !== ""
          ? "md:h-[clamp(75px,15vh,600px)] sm:h-[clamp(25px,15vh,300px)] h-[clamp(50px,15vh,400px)]"
          : "md:h-[clamp(300px,60vh,1500px)] sm:h-[clamp(100px,60vh,800px)] h-[clamp(200px,60vh,1600px)]"
      } bg-yellow-300 bg-[url("/assets/home-page-assets/highlight-section-assets/story-highlights-image.png")] bg-cover bg-center transition-all duration-1000 ease-in-out`}
      onClick={() => handleClick("Story")}
    >
      <div className="w-full h-full radial-gradient">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h4
            className={`${
              isClick === "Story" ? "md:mt-[10vh] sm:mt-[15vh] mt-[30vh]" : ""
            } text-white md:text-[8vw] sm:text-[5vw] text-[10vw] font-pirata text-center transition-all duration-1000 ease-in-out`}
          >
            Tales of Etheria
          </h4>

          <p
            className={`${
              descAppear
                ? "opacity-100 md:text-[1.7vw] sm:text-[1.3vw] text-[1.8vw]"
                : "opacity-0 md:text-[0.1vw] sm:text-[0.1vw] text-[0vw]"
            } text-white text-center pr-[10%] pl-[10%] transition-all duration-300 ease-in-out`}
          >
            The holy sword, forged from shattered stars, waits for the soul
            worthy to wield it. Within the Celestial Void, its story echoes,
            awaiting a fate that will shatter eternity. Those who dare seek it
            will face a destiny beyond the fabric of time itself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalStoryHighlights;
