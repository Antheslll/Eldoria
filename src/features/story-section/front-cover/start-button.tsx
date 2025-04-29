import { useRef } from "react";

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
    <div className="w-full centered-positioning">
      <audio ref={audioRef} src="/assets/audio/theme.mp3" preload="auto" />
      <button
        className="w-[130px] h-[40px] font-pirata border-2 border-white text-white rounded-[8px] cursor-pointer"
        onClick={handleClick}
      >
        Discover the Light
      </button>
    </div>
  );
};

export default StartButton;
