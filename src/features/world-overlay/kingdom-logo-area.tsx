interface KingdomLogoProps {
  logo: string;
  logoBg: string;
}

const KingdomLogoArea = ({ logo, logoBg }: KingdomLogoProps) => {
  return (
    <div className="pt-3">
      <div
        className="w-[7vw] h-[7vw] rounded-full blur-[20%] centered-positioning"
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
