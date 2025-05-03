interface SkillIconPropsType {
  backgroundImg: string;
  skillName: string;
  handleSkillHover: (skill: string) => void;
  handleSkillLeave: () => void;
}

const SkillIcon = ({
  backgroundImg,
  skillName,
  handleSkillHover,
  handleSkillLeave,
}: SkillIconPropsType) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="grid gap-2"
        onMouseEnter={() => handleSkillHover(skillName)}
        onMouseLeave={handleSkillLeave}
      >
        <div className="flex justify-center">
          <div
            className="lg:w-[3vw] lg:h-[3vw] md:w-[8vw] md:h-[8vw] sm:w-[3vw] sm:h-[3vw] w-[8vw] h-[8vw] bg-white border-2 border-white rounded-full bg-cover bg-center"
            style={{
              backgroundImage: backgroundImg,
            }}
          ></div>
        </div>

        <div className="flex justify-center">
          <span className=" text-white text-center lg:text-[0.6vw] md:text-[2vw] sm:text-[0.7vw] text-[2.3vw] fell-english">
            {skillName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
