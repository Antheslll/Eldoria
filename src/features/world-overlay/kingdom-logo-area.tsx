interface KingdomLogoProps {
  logo: string;
  logoBg: string;
}

const KingdomLogoArea = ({ logo, logoBg }: KingdomLogoProps) => {
  return (
    <div className="pt-3 lg:pt-[clamp(30px,8vh,80px)] md:pt-[clamp(50px,4vh,80px)] sm:pt-[clamp(20px,4vh,50px)] ">
      <div
        className="xl:w-[7vw] xl:h-[7vw] lg:w-[7vw] lg:h-[7vw] md:w-[13vw] md:h-[13vw] sm:w-[8vw] sm:h-[8vw] w-[17vw] h-[17vw] rounded-full blur-[20%] centered-positioning"
        style={{ backgroundColor: `${logoBg}` }}
      >
        {logo === "" ? (
          <span className="text-white text-[50px] font-pirata">?</span>
        ) : (
          <img src={logo} alt="kingdom-logo" />
        )}
      </div>
    </div>
  );
};

export default KingdomLogoArea;
