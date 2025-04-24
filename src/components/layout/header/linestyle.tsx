const LineStyle = () => {
  return (
    <div className="w-full h-[30px] flex justify-center">
      <div className="w-auto grid grid-cols-[270px_40px_30px_40px_270px]">
        <Line />
        <Diamond />
        <Circle />
        <Diamond />
        <Line />
      </div>
    </div>
  );
};

export default LineStyle;

const Line = () => {
  return (
    <div className="flex items-center">
      <div className="w-full h-[2px] bg-white "></div>
    </div>
  );
};

const Diamond = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="w-[10px] h-[10px] bg-white rotate-45 "></div>
    </div>
  );
};

const Circle = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[25px] h-[25px] border-2 border-white rounded-[50%]"></div>
    </div>
  );
};
