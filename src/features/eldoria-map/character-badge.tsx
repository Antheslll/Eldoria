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
      className="xl:w-[200px] xl:h-[200px] lg:w-[180px] lg:h-[180px] md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] w-[60px] h-[60px] absolute z-20 rounded-full bg-white/30 backdrop-blur-[5px] scale-[50%] cursor-pointer"
      onClick={() => handleSetKingdom(kingdom)}
    >
      <div
        className="xl:w-[130px] xl:h-[130px] lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] absolute z-30 bg-center bg-cover rounded-full xl:ml-[36px] xl:mt-[30px] xl:border-15 lg:ml-[32px] lg:mt-[27px] lg:border-10 md:ml-[16px] md:mt-[12px] md:border-7 sm:ml-[15px] sm:mt-[12px] sm:border-5 ml-[11px] mt-[10px] border-4 border-white"
        style={{
          backgroundImage: `url(${profileRef})`,
        }}
      ></div>
      <img
        src={label}
        className="xl:w-[150px] lg:w-[140px] md:w-[100px] sm:w-[70px] w-[50px] absolute z-40 xl:ml-[25px] xl:mt-[125px] lg:ml-[20px] lg:mt-[115px] md:ml-[10px] md:mt-[80px] sm:ml-[10px] sm:mt-[60px] ml-[6px] mt-[38px]"
      />

      <span className="absolute z-50 xl:pt-[128px] xl:pl-[67px] xl:text-[21px] lg:pt-[120px] lg:pl-[57px] lg:text-[21px] md:pt-[83px] md:pl-[38px] md:text-[15px] sm:pt-[62px] sm:pl-[27px] sm:text-[12px] pt-[39px] pl-[20px] text-[8px] text-white font-pirata">
        {kingdom}
      </span>
    </div>
  );
};

export default CharacterBadge;
