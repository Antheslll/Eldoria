import { Link } from "react-router-dom";
import { useState } from "react";

interface NavigationMenuProps {
  navName1: string;
  navName2: string;
  navName3: string;
  anchor1: string;
  anchor2: string;
  anchor3: string;
  navKey1: string;
  navKey2: string;
  navKey3: string;
  handleSetKey: (key: string) => void;
  handleOffKey: () => void;
}

const NavigationMenu = ({
  navName1,
  navName2,
  navName3,
  anchor1,
  anchor2,
  anchor3,
  navKey1,
  navKey2,
  navKey3,
  handleSetKey,
  handleOffKey,
}: NavigationMenuProps) => {
  return (
    <div className="w-auto h-[70px] flex justify-center  xl:flex-row lg:flex-row sm:flex-row lg:items-end lg:gap-6 sm:gap-8 flex-col md:flex-col items-center md:gap-4 gap-1">
      <NavigationButton
        pages={navName1}
        anchor={anchor1}
        navKey={navKey1}
        handleSetKey={handleSetKey}
        handleOffKey={handleOffKey}
      />
      <NavigationButton
        pages={navName2}
        anchor={anchor2}
        navKey={navKey2}
        handleSetKey={handleSetKey}
        handleOffKey={handleOffKey}
      />
      <NavigationButton
        pages={navName3}
        anchor={anchor3}
        navKey={navKey3}
        handleSetKey={handleSetKey}
        handleOffKey={handleOffKey}
      />
    </div>
  );
};

export default NavigationMenu;

interface NavigationButtonProps {
  pages: string;
  anchor: string;
  navKey: string;
  handleSetKey: (key: string) => void;
  handleOffKey: () => void;
}

const NavigationButton = ({
  pages,
  anchor,
  handleSetKey,
  handleOffKey,
}: NavigationButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  let theKey: string;
  if (pages === "Realm of Eldoria") {
    theKey = "world";
  } else if (pages === "The Living Lore") {
    theKey = "character";
  } else if (pages === "Arcane Chronicles") {
    theKey = "story";
  } else if (pages === "Return to Base") {
    theKey = "home";
  }
  if (pages === "Arcane Chronicles") {
    return (
      <a href={anchor} target="_blank">
        <button
          className={`${
            isHover ? "relative z-60 bg-white/20" : ""
          }  xl:w-[11vw] xl:h-[3vw] xl:text-[1.3vw] lg:w-[11vw] lg:h-[3vw] lg:text-[1.3vw] sm:w-[13vw] sm:h-[4vw] sm:text-[1.4vw] md:w-[40vw] md:h-[5vw] md:text-[2.5vw] w-[50vw] h-[6vw] text-[2.8vw] font-pirata border-2 border-white text-white lg:rounded-[8px] md:rounded-[8px] rounded-[6px] cursor-pointer `}
          onMouseEnter={() => {
            handleSetKey(theKey);
            setIsHover(true);
          }}
          onMouseLeave={() => {
            handleOffKey();
            setIsHover(false);
          }}
        >
          {pages}
        </button>
      </a>
    );
  } else {
    return (
      <Link to={anchor}>
        <button
          className={`${
            isHover ? "relative z-60 bg-white/20" : ""
          }  xl:w-[11vw] xl:h-[3vw] xl:text-[1.3vw] lg:w-[11vw] lg:h-[3vw] lg:text-[1.3vw] sm:w-[13vw] sm:h-[4vw] sm:text-[1.4vw] md:w-[40vw] md:h-[5vw] md:text-[2.5vw] w-[50vw] h-[6vw] text-[2.8vw] font-pirata border-2 border-white text-white lg:rounded-[8px] md:rounded-[8px] rounded-[6px] cursor-pointer `}
          onMouseEnter={() => {
            handleSetKey(theKey);
            setIsHover(true);
          }}
          onMouseLeave={() => {
            handleOffKey();
            setIsHover(false);
          }}
        >
          {pages}
        </button>
      </Link>
    );
  }
};

export { NavigationButton };
