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
        <h3 className="text-[3.7vw] font-pirata " style={{ color: `${color}` }}>
          {kingdom}
        </h3>
      </div>
      <div className="pl-[5%] ">
        <div
          className="w-[90%] h-[3px]"
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
      <div className="pl-5 pr-8 pt-2">
        <p
          className=" font-eb-garamond text-[1vw] text-justify"
          style={{ color: `${color}` }}
        >
          <span className="text-[0.9vw]">
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
