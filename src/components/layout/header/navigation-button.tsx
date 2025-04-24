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
    <div className="w-auto h-[70px] flex justify-center items-end gap-6">
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
  return (
    <Link to={anchor}>
      <button
        className={`${
          isHover ? "relative z-60 bg-white/20" : ""
        } w-[120px] h-[35px] font-pirata border-2 border-white text-white rounded-[8px] cursor-pointer `}
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
};
