const BorderBottom = () => {
  return (
    <div className="w-full flex justify-center z-10">
      <div className="w-[100px] h-[50px]  grid grid-cols-[25px_50px_25px]">
        <Diamond width={5} height={5} />
        <Diamond width={10} height={10} />
        <Diamond width={5} height={5} />
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
        style={{ width: `${width}px `, height: `${height}px` }}
        className={` bg-white rotate-45`}
      ></div>
    </div>
  );
};
