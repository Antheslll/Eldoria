import "../../styles/home.css";
import { useState } from "react";
import HighlightWorld from "./highlights-world";
import HighlightCharacter from "./highlights-character";
import HighlightStory from "./highlights-story";
const HorizontalSlidingImage = () => {
  const [isHover, setIsHover] = useState<string>("");
  const [hoverGrab, setHoverGrab] = useState("");

  const handleGrab = (grabbed: string) => {
    setTimeout(() => {
      setHoverGrab(grabbed);
    }, 300);
  };
  return (
    <>
      <main className="w-full xl:h-[clamp(700px,100vh,1100px)] lg:h-[clamp(600px,100vh,1100px)]  home-background flex justify-center items-center">
        <div className="w-full xl:h-[clamp(500px,80vh,800px)] lg:h-[clamp(500px,70vh,1100px)] pl-[8%] ">
          <HighlightWorld
            isHover={isHover}
            setIsHover={setIsHover}
            hoverGrab={hoverGrab}
          />
          <HighlightCharacter
            isHover={isHover}
            setIsHover={setIsHover}
            hoverGrab={hoverGrab}
            handleGrab={handleGrab}
          />
          <HighlightStory
            isHover={isHover}
            setIsHover={setIsHover}
            hoverGrab={hoverGrab}
            handleGrab={handleGrab}
          />
        </div>
      </main>
    </>
  );
};

export default HorizontalSlidingImage;
