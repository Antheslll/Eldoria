import { useRef } from "react";
import { Link } from "react-router-dom";

interface StartButtonProps {
  handleSlide: (slide: string) => void;
}

const StartButton = ({ handleSlide }: StartButtonProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    handleSlide("slide-1");
  };

  return (
    <div className="w-full centered-positioning flex-col gap-y-[2vh]">
      <audio ref={audioRef} src="/assets/audio/theme.mp3" preload="auto" />
      <button
        className="w-[130px] h-[6vh] font-pirata border-2 border-white text-white rounded-[8px] cursor-pointer"
        onClick={handleClick}
      >
        Discover the Light
      </button>
      <button className="w-[130px] h-[6vh] font-pirata border-2 border-white text-white rounded-[8px] cursor-pointer">
        <Link to="/">Return to Base</Link>
      </button>
    </div>
  );
};

export default StartButton;
