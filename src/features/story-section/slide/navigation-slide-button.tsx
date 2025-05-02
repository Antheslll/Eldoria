import { useState } from "react";

interface NavigationSlideButtonProps {
  nav: string;
  text: string;
  handleSlide: (slide: string) => void;
}

const NavigationSlideButton = ({
  nav,
  handleSlide,
  text,
}: NavigationSlideButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      className={`fell-english  ${
        isHover ? "text-white" : "text-[#FFD700]"
      } cursor-pointer`}
      onClick={() => handleSlide(nav)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text === "prev" ? (
        <>
          &lt;&lt;{" "}
          <span className="lg:text-[clamp(12px,1.5vw,20px)]">Prev</span>
        </>
      ) : (
        <>
          <span className="lg:text-[clamp(12px,1.5vw,20px)]">Next</span>&gt;&gt;
        </>
      )}
    </button>
  );
};

export default NavigationSlideButton;
