import "../../../styles/header.css";
import BorderBottom from "./border-bottom";
import LineStyle from "./linestyle";
import NavigationMenu from "./navigation-button";
import OverlayNavigation from "./overlay-navigation";
import { useState } from "react";

interface HeaderComponentProps {
  header: string;
  subheader: string;
  navName1: string;
  navName2: string;
  navName3: string;
  anchor1: string;
  anchor2: string;
  anchor3: string;
  navKey1: string;
  navKey2: string;
  navKey3: string;
  backgroundImage: string;
}

type OverlayKey = string;

type OverlayItem = {
  imgSrc: string;
  text: string;
};

const HeaderComponent = ({
  header,
  subheader,
  navName1,
  navName2,
  navName3,
  anchor1,
  anchor2,
  anchor3,
  navKey1,
  navKey2,
  navKey3,
  backgroundImage,
}: HeaderComponentProps) => {
  const [isKey, setIsKey] = useState("");
  const [src, setSrc] = useState("");
  const [text, setText] = useState("");

  const overlayData: Record<OverlayKey, OverlayItem> = {
    home: {
      imgSrc:
        "/assets/home-page-assets/hero-section-assets/home-navigation-button-hovering-overlay.png",
      text: "Do Not Drift Too Far, the Abyss Awaits",
    },
    world: {
      imgSrc:
        "/assets/home-page-assets/hero-section-assets/world-navigation-button-hovering-overlay.png",
      text: "Step Into the Forbidden",
    },
    character: {
      imgSrc:
        "/assets/home-page-assets/hero-section-assets/character-navigation-button-hovering-overlay.png",
      text: "Meet the Chosen Few",
    },
    story: {
      imgSrc:
        "/assets/home-page-assets/hero-section-assets/story-navigation-button-hovering-overlay.png",
      text: "Unlock the lost Grimoire",
    },
  };

  const handleSetKey = (theKey: string) => {
    if (!isKey) {
      setIsKey(theKey);
      setSrc(overlayData[theKey].imgSrc);
      setText(overlayData[theKey].text);
    }
  };

  const handleOffKey = () => {
    setIsKey("");
    setSrc("");
    setText("");
  };

  return (
    <>
      <OverlayNavigation imgSrc={src} text={text} />
      <div
        className="w-full lg:h-[600px] bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full lg:h-[600px] bg-black/50 flex justify-center pt-[90px]">
          <div className="w-[70%] lg:h-[500px] grid grid-rows-[70px_100px_30px_50px_100px_100px_50px]">
            <div className="flex justify-center">
              <img
                src="/assets/eldoria-logo-assets/Eldoria Logo.png"
                alt="logo eldoria"
                className="w-[70px] "
              />
            </div>
            <h1 className="text-white text-center md:text-[3.8rem] lg:text-[4rem]">
              {header}
            </h1>
            <LineStyle />
            <div className="w-full flex justify-center">
              <h3 className="w-[70%] text-[13px] text-center text-white">
                {subheader}
              </h3>
            </div>
            <NavigationMenu
              navName1={navName1}
              navName2={navName2}
              navName3={navName3}
              anchor1={anchor1}
              anchor2={anchor2}
              anchor3={anchor3}
              navKey1={navKey1}
              navKey2={navKey2}
              navKey3={navKey3}
              handleSetKey={handleSetKey}
              handleOffKey={handleOffKey}
            />
            <span></span>
            <BorderBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
