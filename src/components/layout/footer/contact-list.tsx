import { useState } from "react";
const ContactList = ({
  icon,
  contactText,
}: {
  icon: React.ReactNode;
  contactText: string;
}) => {
  const [isHover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  return (
    <li
      className="w-[60%]  grid grid-cols-[30px_300px] "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center">
        <div
          className={`${
            isHover === true ? "w-[30px] h-[30px]" : "w-[25px] h-[25px]"
          } border-2 border-white rounded-full flex justify-center items-center transition-all duration-300`}
        >
          {icon}
        </div>
      </div>
      <span className="ml-[12px] text-[10px] flex items-center">
        {contactText}
      </span>
    </li>
  );
};

export default ContactList;
