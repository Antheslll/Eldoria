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
            className="w-[45px] h-[45px] bg-white border-2 border-white rounded-full bg-cover bg-center"
            style={{
              backgroundImage: backgroundImg,
            }}
          ></div>
        </div>

        <div className="flex justify-center">
          <span className=" text-white text-center text-[8px] fell-english">
            {skillName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
