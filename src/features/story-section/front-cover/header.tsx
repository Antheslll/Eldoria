interface StoryHeaderCoverProps {
  text: string;
}

const StoryHeaderCover = ({ text }: StoryHeaderCoverProps) => {
  return (
    <div className="w-full centered-positioning">
      <h1
        className={`font-pirata text-white ${
          text === "The End" ? "text-[70px]" : "text-[45px]"
        }`}
      >
        {text}
      </h1>
    </div>
  );
};

export default StoryHeaderCover;
