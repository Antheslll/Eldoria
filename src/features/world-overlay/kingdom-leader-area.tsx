interface KingdomLeaderProps {
  charAssets: string;
  color: string;
}

const KingdomLeaderArea = ({ charAssets, color }: KingdomLeaderProps) => {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <img
        src={charAssets}
        alt="the king and the queen"
        className="w-[80%] z-20"
      />
      <div
        className="w-[26vw] h-[30px] rounded-[70%] mt-[390px]  absolute z-10"
        style={{ backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};

export default KingdomLeaderArea;
