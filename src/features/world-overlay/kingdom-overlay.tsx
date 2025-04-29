import KingdomDescription from "./kingdom-description";
import KingdomPreview from "./kingdom-preview";
import { forKingdom } from "../../data/kingdom-data";
import { useMemo } from "react";

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

  return (
    <div
      className="w-[100%] h-[100vh] fixed z-60 bg-black/50 centered-positioning"
      onClick={() => {
        handleSetKingdom("");
      }}
    >
      <div
        className="w-[80%] h-[90vh]  grid grid-cols-[35%_65%]"
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
};

export default KingdomOverlay;
