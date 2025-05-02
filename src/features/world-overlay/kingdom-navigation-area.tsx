import {
  KingdomIconBlack,
  KingdomIconWhite,
  KingIconBlack,
  KingIconWhite,
} from "../../icon/world-overlay-assets";
import KingdomNavigation from "./kingdom-navigation";

interface KingdomNavigationProps {
  color: string;
  location: string;
  preview: string;
  handlePreview: (content: string) => void;
}

const KingdomNavigationArea = ({
  color,
  location,
  preview,
  handlePreview,
}: KingdomNavigationProps) => {
  return (
    <div className="flex flex-col xl:gap-[clamp(40px,20vh,80px)] lg:gap-[clamp(40px,20vh,80px)] md:gap-[clamp(50px,7vh,90px)] sm:gap-[clamp(20px,7vh,50px)] gap-[clamp(20px,3vh,40px)] pt-2">
      <div className="flex justify-center items-center">
        <div className="w-[90%] lg:h-[20%] md:h-[20%] grid grid-cols-3">
          <div></div>
          <div
            className={` centered-positioning sm:text-[1.2vw] text-[2.5vw]`}
            style={{ color: `${location === "north" ? `${color}` : "white"}` }}
          >
            N
          </div>
          <div></div>
          <div
            className={` centered-positioning  sm:text-[1.2vw] text-[2.5vw]`}
            style={{ color: `${location === "west" ? `${color}` : "white"}` }}
          >
            W
          </div>
          <div className="centered-positioning sm:text-[1.2v text-[2.5vw]w] ">
            <img
              src="/assets/world-page-assets/map-section/compass.png"
              className="lg:w-[5vw] md:h-[4vh] md:w-[4vh]"
            />
          </div>
          <div
            className={` centered-positioning  sm:text-[1.2vw] text-[2.5vw]`}
            style={{ color: `${location === "east" ? `${color}` : "white"}` }}
          >
            E
          </div>
          <div></div>
          <div
            className={`centered-positioning  sm:text-[1.2vw] text-[2.5vw]`}
            style={{ color: `${location === "south" ? `${color}` : "white"}` }}
          >
            S
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <KingdomNavigation
          icon={preview === "leader" ? <KingIconWhite /> : <KingIconBlack />}
          nav="leader"
          handlePreview={handlePreview}
          preview={preview}
          color={color}
        />
        <KingdomNavigation
          icon={
            preview === "kingdom" ? <KingdomIconWhite /> : <KingdomIconBlack />
          }
          nav="kingdom"
          handlePreview={handlePreview}
          preview={preview}
          color={color}
        />
      </div>
    </div>
  );
};

export default KingdomNavigationArea;
