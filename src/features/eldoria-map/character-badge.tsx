interface CharacterBadgeProps {
  profileRef: string;
  label: string;
  kingdom: string;
  handleSetKingdom: (kingdom: string) => void;
}

const CharacterBadge = ({
  profileRef,
  label,
  kingdom,
  handleSetKingdom,
}: CharacterBadgeProps) => {
  return (
    <div
      className="w-[200px] h-[200px] absolute z-20 rounded-full bg-white/30 backdrop-blur-[5px] scale-[50%] cursor-pointer"
      onClick={() => handleSetKingdom(kingdom)}
    >
      <div
        className="w-[130px] h-[130px] absolute z-30 bg-center bg-cover rounded-full ml-[35px] mt-[30px] border-15 border-white"
        style={{
          backgroundImage: `url(${profileRef})`,
        }}
      ></div>
      <img
        src={label}
        className="w-[150px] absolute z-40 ml-[23px] mt-[126px]"
      />
      <div className="w-[200px] h-[200px] absolute z-50 pt-[125px] pl-[63px]">
        <span className="text-[27px] text-white font-pirata">{kingdom}</span>
      </div>
    </div>
  );
};

export default CharacterBadge;
