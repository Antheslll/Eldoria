interface KingdomLeaderProps {
  charAssets: string;
  color: string;
}

const KingdomLeaderArea = ({ charAssets, color }: KingdomLeaderProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center z-0">
      <div className="w-full h-auto relative z-10 flex justify-center items-center">
        <img
          src={charAssets}
          alt="the king and the queen"
          className="sm:w-full md:w-[80%] lg:w-[100%] xl:w-[80%] z-30"
        />
        <div
          className="sm:w-full md:w-[80%] lg:w-[100%] xl:w-[80%] h-[20%] mt-[90%] absolute z-20 rounded-[130%]"
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
    </div>
  );
};

export default KingdomLeaderArea;
