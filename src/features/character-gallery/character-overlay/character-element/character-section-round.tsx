type ChildProps = {
  children: React.ReactNode;
};

const CharacterSectionRound = ({ children }: ChildProps) => {
  return (
    <div className="lg:w-[5vw] lg:h-[5vw] md:w-[8vw] md:h-[8vw] sm:w-[6vw] sm:h-[6vw] h-[10vw] w-[10vw] rounded-full bg-black/30 flex justify-center items-center ">
      <div className="lg:w-[4vw] lg:h-[4vw] md:w-[6.5vw] md:h-[6.5vw] sm:w-[5vw] sm:h-[5vw] h-[9vw] w-[9vw] rounded-full bg-black/50 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default CharacterSectionRound;
