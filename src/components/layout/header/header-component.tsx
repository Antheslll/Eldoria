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
        className="w-[100vw] xl:w-[100vw] xl:h-[100vh] sm:w-[100vw] lg:h-[100vh] md:w-[100vw] md:h-[clamp(700px,100vh,1500px)] sm:h-[clamp(600px,100vh,1000px)] h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-[100vw] lg:h-[100vh] md:h-[clamp(700px,100vh,1500px)] sm:h-[clamp(600px,100vh,800px)] h-[100vh] bg-red-500 md:bg-black/50 flex justify-center pt-[90px]">
          <div className="lg:w-[80vw] md:w-[80vw] h-auto grid  xl:grid-rows-[clamp(30px,10vh,150px)_clamp(70px,15vh,150px)_6vh_10vh_15vh_10vh_7vh] lg:grid-rows-[10vh_13vh_6vh_10vh_15vh_10vh_7vh] md:grid-rows-[clamp(130px,12vh,160px)_clamp(90px,9vh,120px)_clamp(50px,4vh,70px)_clamp(120px,12vh,150px)_clamp(150px,15vh,180px)_1vh_2vh] sm:grid-rows-[35vh_17vh_8vh_clamp(80px,20vh,200px)_clamp(100px,35vh,200px)_2vh_1vh] grid-rows-[13vh_5vh_4vh_8vh_13vh_2vh_1vh]">
            <div className="flex justify-center ">
              <img
                src="/assets/eldoria-logo-assets/Eldoria Logo.png"
                alt="logo eldoria"
                className=" xl:w-[5vw] xl:h-[5vw] lg:w-[7vw] lg:h-[7vw] md:w-[15vw] md:h-[15vw] sm:w-[15vw] sm:h-[15vw] w-[20vw] h-[20vw]"
              />
            </div>
            <h1 className="text-white text-center xl:text-[5vw] sm:text-[6vw] md:text-[7vw] lg:text-[clamp(20px,5vw,100px)] text-[7vw]">
              {header}
            </h1>
            <LineStyle />
            <div className="w-full flex justify-center xl:pl-[4vw] xl:pr-[4vw] lg:pl-[4vw] md:pl-[0.5vw] lg:pr-[4vw]  md:pr-[0.5vw] pl-[2vw] pr-[2vw] sm:pl-[7vw] sm:pr-[7vw]">
              <h3 className="w-[70%] lg:text-[1.1vw] md:text-[1.3vw] sm:text-[1.3vw] text-[1.6vw] text-center text-white">
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
