import "../../styles/home.css";
import { useState } from "react";
import HighlightWorld from "./highlights-world";
import HighlightCharacter from "./highlights-character";
import HighlightStory from "./highlights-story";
const SlidingImage = () => {
  const [isHover, setIsHover] = useState<string>("");
  const [hoverGrab, setHoverGrab] = useState("");

  const handleGrab = (grabbed: string) => {
    setTimeout(() => {
      setHoverGrab(grabbed);
    }, 300);
  };
  return (
    <>
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
    </>
  );
};

export default SlidingImage;
