import KingdomDescription from "./kingdom-description";
import KingdomPreview from "./kingdom-preview";
import { forKingdom } from "../../data/kingdom-data";
import { useEffect, useMemo, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

interface KingdomOverlayProps {
  handleSetKingdom: (kingdom: string) => void;
  isKingdom: string;
}

interface Kingdom {
  kingdom: string;
  title: string;
  info: string;
  color: string;
  charAssets: string;
  logo: string;
  land: string;
  location: string;
  logoBg: string;
}

const KingdomOverlay = ({
  handleSetKingdom,
  isKingdom,
}: KingdomOverlayProps) => {
  const filteredKingdom: Kingdom | undefined = forKingdom.find(
    (kingdom) => kingdom.kingdom === isKingdom
  );

  const {
    kingdomName,
    kingdomColor,
    kingdomInfo,
    kingdomTitle,
    kingdomCharAssets,
    kingdomLand,
    kingdomLogo,
    kingdomLocation,
    kingdomLogoBg,
  } = useMemo(() => {
    return {
      kingdomName: filteredKingdom?.kingdom || "",
      kingdomColor: filteredKingdom?.color || "",
      kingdomTitle: filteredKingdom?.title || "",
      kingdomInfo: filteredKingdom?.info || "",
      kingdomCharAssets: filteredKingdom?.charAssets || "",
      kingdomLogo: filteredKingdom?.logo || "",
      kingdomLand: filteredKingdom?.land || "",
      kingdomLocation: filteredKingdom?.location || "",
      kingdomLogoBg: filteredKingdom?.logoBg || "",
    };
  }, [filteredKingdom]);

  const [forTransition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);

  const handleClose = () => {
    setTransition(false);

    setTimeout(() => {
      handleSetKingdom("");
    }, 500);
  };

  const { width, height } = useWindowSize();
  if (width >= 1024) {
    return (
      <div
        className="w-[100%] h-[100vh] fixed z-60 bg-black/50 centered-positioning"
        onClick={() => {
          handleClose();
        }}
      >
        <div
          className={`${
            forTransition ? "opacity-100" : "opacity-0"
          }  transition-all duration-700 ease-in-out xl:w-[80%] xl:h-[90vh] lg:w-[80%] lg:h-[90vh] grid xl:grid-cols-[35%_65%] lg:grid-cols-[35%_65%]`}
          onClick={(e) => e.stopPropagation()}
        >
          <KingdomDescription
            kingdom={kingdomName}
            color={kingdomColor}
            title={kingdomTitle}
            info={kingdomInfo}
          />
          <KingdomPreview
            color={kingdomColor}
            charAssets={kingdomCharAssets}
            logo={kingdomLogo}
            land={kingdomLand}
            location={kingdomLocation}
            logoBg={kingdomLogoBg}
          />
        </div>
      </div>
    );
  } else if (width >= 768) {
    if (height < 600) {
      return (
        <div
          className="w-[100%] h-[100vh] fixed z-60 bg-black/50 centered-positioning"
          onClick={() => {
            handleClose();
          }}
        >
          <div
            className={`${
              forTransition ? "opacity-100" : "opacity-0"
            }  transition-all duration-700 ease-in-out md:w-[80%] md:h-[95vh] `}
            onClick={(e) => e.stopPropagation()}
          >
            <KingdomDescription
              kingdom={kingdomName}
              color={kingdomColor}
              title={kingdomTitle}
              info={kingdomInfo}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="w-[100%] h-[100vh] fixed z-60 bg-black/50 centered-positioning"
          onClick={() => {
            handleClose();
          }}
        >
          <div
            className={`${
              forTransition ? "opacity-100" : "opacity-0"
            }  transition-all duration-700 ease-in-out md:w-[80%] md:h-[95vh] grid md:grid-rows-[45%_55%]`}
            onClick={(e) => e.stopPropagation()}
          >
            <KingdomPreview
              color={kingdomColor}
              charAssets={kingdomCharAssets}
              logo={kingdomLogo}
              land={kingdomLand}
              location={kingdomLocation}
              logoBg={kingdomLogoBg}
            />
            <KingdomDescription
              kingdom={kingdomName}
              color={kingdomColor}
              title={kingdomTitle}
              info={kingdomInfo}
            />
          </div>
        </div>
      );
    }
  } else if (width > 640) {
    return (
      <div
        className="w-[100%] h-[100vh] fixed z-60 bg-black/50 centered-positioning"
        onClick={() => {
          handleClose();
        }}
      >
        <div
          className={`${
            forTransition ? "opacity-100" : "opacity-0"
          } transition-all duration-700 ease-in-out xl:w-[80%] xl:h-[90vh] lg:w-[80%] lg:h-[90vh] sm:w-[80%] sm:h-[90vh] grid xl:grid-cols-[35%_65%] lg:grid-cols-[35%_65%] sm:grid-cols-[35%_65%]`}
          onClick={(e) => e.stopPropagation()}
        >
          <KingdomDescription
            kingdom={kingdomName}
            color={kingdomColor}
            title={kingdomTitle}
            info={kingdomInfo}
          />
          <KingdomPreview
            color={kingdomColor}
            charAssets={kingdomCharAssets}
            logo={kingdomLogo}
            land={kingdomLand}
            location={kingdomLocation}
            logoBg={kingdomLogoBg}
          />
        </div>
      </div>
    );
  } else if (width > 0) {
    return (
      <div
        className="w-[100%] h-[100vh] fixed z-60 bg-black/50 centered-positioning"
        onClick={() => {
          handleClose();
        }}
      >
        <div
          className={`${
            forTransition ? "opacity-100" : "opacity-0"
          }  transition-all duration-700 ease-in-out md:w-[80%] md:h-[95vh] grid md:grid-rows-[45%_55%] h-[95vh] grid-rows-[45%_55%]`}
          onClick={(e) => e.stopPropagation()}
        >
          <KingdomPreview
            color={kingdomColor}
            charAssets={kingdomCharAssets}
            logo={kingdomLogo}
            land={kingdomLand}
            location={kingdomLocation}
            logoBg={kingdomLogoBg}
          />
          <KingdomDescription
            kingdom={kingdomName}
            color={kingdomColor}
            title={kingdomTitle}
            info={kingdomInfo}
          />
        </div>
      </div>
    );
  }
};

export default KingdomOverlay;
