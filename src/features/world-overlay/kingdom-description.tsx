interface KingdomDescriptionProps {
  kingdom: string;
  color: string;
  title: string;
  info: string;
}

const KingdomDescription = ({
  kingdom,
  color,
  title,
  info,
}: KingdomDescriptionProps) => {
  return (
    <div className="bg-black grid grid-rows-[15vh_1vh_70vh]">
      <div className=" flex items-end pl-[5%]">
        <h3
          className="xl:text-[3.7vw] lg:text-[3.7vw] md:text-[10vw] sm:text-[3.7vw] text-[10vw] font-pirata "
          style={{ color: `${color}` }}
        >
          {kingdom}
        </h3>
      </div>
      <div className="pl-[5%] ">
        <div
          className="w-[90%] h-[3px]"
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
      <div className="xl:pl-5 lg:pl-5 md:pl-7.5 xl:pr-8 lg:pr-8 md:pr-[7vw] sm:pl-2.5 sm:pr-5 pl-5 pr-10 pt-2 ">
        <p
          className=" font-eb-garamond xl:text-[1vw] lg:text-[1vw] md:text-[2vw] sm:text-[1vw] text-[2.5vw] text-justify"
          style={{ color: `${color}` }}
        >
          <span className="xl:text-[0.9vw] lg:text-[0.9vw] md:text-[3vw] sm:text-[1.3vw] text-[3vw]">
            {title} <br />
          </span>
          <br />
          {info}
        </p>
      </div>
    </div>
  );
};

export default KingdomDescription;
