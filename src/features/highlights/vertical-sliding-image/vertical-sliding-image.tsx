import { useState } from "react";
import VerticalWorldHighlights from "./highlights-world-vertical";
import VerticalCharacterHighlights from "./highlights-character-vertical";
import VerticalStoryHighlights from "./highlights-story-vertical";

const VerticalSlidingImage = () => {
  const [isClick, setIsClick] = useState("");

  const handleClick = (highlights: string) => {
    if (highlights === isClick) {
      setIsClick("");
    } else {
      setIsClick(highlights);
    }
  };

  return (
    <main>
      <div className="w-full h-[clamp(700px,100vh,900px)] home-background flex justify-center items-center">
        <div className="w-[90%] h-auto flex-col">
          <VerticalWorldHighlights
            isClick={isClick}
            handleClick={handleClick}
          />
          <VerticalCharacterHighlights
            isClick={isClick}
            handleClick={handleClick}
          />
          <VerticalStoryHighlights
            isClick={isClick}
            handleClick={handleClick}
          />
        </div>
      </div>
    </main>
  );
};

export default VerticalSlidingImage;
