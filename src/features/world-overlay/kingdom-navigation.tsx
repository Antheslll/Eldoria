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
      className="w-[3.5vw] h-[3.5vw] bg-white rounded-[18%] centered-positioning cursor-pointer"
      onClick={() => handlePreview(nav)}
      style={{ backgroundColor: `${preview === nav ? color : "white"}` }}
    >
      {icon}
    </div>
  );
};

export default KingdomNavigation;
