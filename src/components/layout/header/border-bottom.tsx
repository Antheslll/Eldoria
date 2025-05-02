const BorderBottom = () => {
  return (
    <div className="w-full flex justify-center z-10 ">
      <div className="  grid grid-cols-[2vw_4vw_2vw]">
        <Diamond width={0.5} height={0.5} />
        <Diamond width={1} height={1} />
        <Diamond width={0.5} height={0.5} />
      </div>
    </div>
  );
};

export default BorderBottom;

interface DiamondTypeProps {
  width: number;
  height: number;
}
const Diamond = ({ width, height }: DiamondTypeProps) => {
  return (
    <div className="flex justify-center items-center">
      <div
        style={{ width: `${width}vw `, height: `${height}vw` }}
        className={` bg-white rotate-45`}
      ></div>
    </div>
  );
};
