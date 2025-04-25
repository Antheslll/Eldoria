type ChildProps = {
  children: React.ReactNode;
};

const CharacterSectionRound = ({ children }: ChildProps) => {
  return (
    <div className="w-[70px] h-[70px] rounded-full bg-black/30 flex justify-center items-center ">
      <div className="w-[60px] h-[60px] rounded-full bg-black/50 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default CharacterSectionRound;
