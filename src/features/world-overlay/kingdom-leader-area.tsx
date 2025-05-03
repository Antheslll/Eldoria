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
        className="sm:w-[26vw] md:w-[35vw] lg:w-[26vw] w-[45vw] h-[30px] rounded-[70%] xl:mt-[clamp(390px,55vh,600px)] lg:mt-[clamp(300px,45vh,400px)] md:mt-[clamp(300px,33vh,500px)] sm:mt-[clamp(200px,57vh,230px)] mt-[clamp(200px,57.5vh,240px)] absolute z-10"
        style={{ backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};

export default KingdomLeaderArea;
