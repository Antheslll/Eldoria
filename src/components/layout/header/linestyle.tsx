const LineStyle = () => {
  return (
    <div className="w-full h-[30px] flex justify-center">
      <div className="w-auto grid 2xl:grid-cols-[24vw_3.5vw_4vw_3.5vw_24vw] xl:grid-cols-[20vw_3.5vw_4vw_3.5vw_20vw] lg:grid-cols-[20vw_3.5vw_4vw_3.5vw_20vw] md:grid-cols-[28vw_3.5vw_4vw_3.5vw_28vw] sm:grid-cols-[23vw_5vw_4vw_5vw_23vw] grid-cols-[30vw_5vw_4vw_5vw_30vw]">
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
      <div className="w-full lg:h-[2px] md:h-[2px] h-[1px] bg-white "></div>
    </div>
  );
};

const Diamond = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="w-[1vw] h-[1vw] bg-white rotate-45 "></div>
    </div>
  );
};

const Circle = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[2vw] h-[2vw] lg:border-2 md:border-2 border-[1.5px] border-white rounded-[50%]"></div>
    </div>
  );
};
