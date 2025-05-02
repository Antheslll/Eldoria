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
      className="w-[60%] grid lg:grid-cols-[2.5vw_20vw] md:grid-cols-[3vw_20vw] sm:grid-cols-[4vw_20vw] grid-cols-[5vw_20vw]   cursor-pointer "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center">
        <div
          className={`${
            isHover === true
              ? "lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw]"
              : "lg:w-[2vw] lg:h-[2vw] md:w-[2.5vw] md:h-[2.5vw]  sm:w-[3vw] sm:h-[3vw] w-[4vw] h-[4vw]"
          } border-2 border-white rounded-full flex justify-center items-center transition-all duration-300`}
        >
          <span className="md:scale-[70%] lg:scale-[100%] sm:scale-[70%] scale-[60%]">
            {icon}
          </span>
        </div>
      </div>
      <span className="lg:ml-[1vw] lg:text-[0.9vw] md:text-[0.9vw] md:ml-[1vw] text-[1.2vw] ml-[1.5vw] flex items-center">
        {contactText}
      </span>
    </li>
  );
};

export default ContactList;
