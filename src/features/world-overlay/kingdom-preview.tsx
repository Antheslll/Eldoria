import { useState } from "react";
import KingdomLeaderArea from "./kingdom-leader-area";
import KingdomLogoArea from "./kingdom-logo-area";
import KingdomNavigationArea from "./kingdom-navigation-area";

interface KingdomPreviewProps {
  color: string;
  charAssets: string;
  logo: string;
  land: string;
  location: string;
  logoBg: string;
}

const KingdomPreview = ({
  color,
  charAssets,
  logo,
  location,
  logoBg,
  land,
}: KingdomPreviewProps) => {
  const [preview, setPreview] = useState("leader");

  const handlePreview = (content: string) => {
    setPreview(content);
  };
  if (preview === "kingdom") {
    return (
      <div className={`h-full bg-black/80`}>
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${land})` }}
        >
          <div
            className={`${
              preview === "kingdom" ? "bg-black/0" : "bg-black/80"
            } h-full grid grid-cols-[20%_60%_20%]`}
          >
            <KingdomNavigationArea
              color={color}
              location={location}
              preview={preview}
              handlePreview={handlePreview}
            />
            <div></div>
            <KingdomLogoArea logoBg={logoBg} logo={logo} />
          </div>
        </div>
      </div>
    );
  } else if (preview === "leader") {
    return (
      <div className="bg-black/80 h-full grid grid-cols-[20%_60%_20%]">
        <KingdomNavigationArea
          color={color}
          location={location}
          preview={preview}
          handlePreview={handlePreview}
        />
        <KingdomLeaderArea charAssets={charAssets} color={color} />
        <KingdomLogoArea logoBg={logoBg} logo={logo} />
      </div>
    );
  }
};

export default KingdomPreview;
