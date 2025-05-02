import { JSX } from "react";

interface KingdomNavigationProps {
  icon: JSX.Element;
  nav: string;
  preview: string;
  color: string;
  handlePreview: (content: string) => void;
}

const KingdomNavigation = ({
  icon,
  nav,
  preview,
  handlePreview,
  color,
}: KingdomNavigationProps) => {
  return (
    <div
      className="lg:w-[3.5vw] lg:h-[3.5vw] md:w-[5vw] md:h-[5vw] sm:w-[4vw] sm:h-[4vw] w-[8vw] h-[8vw] bg-white rounded-[18%] centered-positioning cursor-pointer"
      onClick={() => handlePreview(nav)}
      style={{ backgroundColor: `${preview === nav ? color : "white"}` }}
    >
      <span className="md:scale-[100%] sm:scale-[60%] scale-[90%]">{icon}</span>
    </div>
  );
};

export default KingdomNavigation;
