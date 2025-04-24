import "../../../styles/header.css";

interface OverlayNavigationType {
  imgSrc: string;
  text: string;
}

const OverlayNavigation = ({ imgSrc, text }: OverlayNavigationType) => {
  return (
    <div
      className={` w-full ${
        imgSrc === "" ? "fade-out" : "fade-in"
      } h-[600px] bg-black/80 absolute z-30 flex justify-center items-end pointer-events-none transition-all duration-300 `}
    >
      <div
        className={` w-full h-[600px] bg-center bg-cover absolute z-40`}
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="w-full h-[600px] bg-black/50 absolute z-50 flex justify-center items-center ">
          <h2 className={`text-white font-pirata text-[80px]`}>{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default OverlayNavigation;
