import CharacterSectionRound from "./character-section-round";
import SkillIcon from "./skill-icon";
import { valdenarHero } from "../../data/valdenar-hero";
import { nirvalisHero } from "../../data/nirvalis-hero";
import { sylvaraHero } from "../../data/sylvara-hero";
import { dravakhorHero } from "../../data/dravakhor-hero";
import { riftlandHero } from "../../data/riftland-hero";
import { useState } from "react";
import CharacterStatusPoint from "./character-status-point";

interface CharacterOverlayPropsType {
  closeOverlay: () => void;
  searchParams: URLSearchParams;
}

const CharacterOverlay = ({
  closeOverlay,
  searchParams,
}: CharacterOverlayPropsType) => {
  const [skillHover, setSkillHover] = useState("");

  const handleSkillHover = (skill: string) => {
    setTimeout(() => {
      setSkillHover(skill);
    }, 200);
  };

  const handleSkillLeave = () => {
    setSkillHover("");
  };

  const allHero = [
    ...nirvalisHero,
    ...valdenarHero,
    ...dravakhorHero,
    ...riftlandHero,
    ...sylvaraHero,
  ];

  const heroParams = searchParams.get("hero");

  const filteredHero = allHero.find((hero) => hero.name === heroParams);

  const skill1 = filteredHero?.skill1;

  const skill2 = filteredHero?.skill3;
  return (
    <div
      className="w-full h-full bg-black/90 fixed z-50 flex justify-center items-center"
      onClick={closeOverlay}
    >
      <div
        className="w-[90%] h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: `url(
            ${filteredHero?.background})`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-[550px] bg-[8B0000]/50">
          <div className="w-full h-[550px] bg-black/70 grid grid-cols-[35%_30%_35%]">
            <div className=" flex justify-center items-center">
              <div className="character-description-background text-white w-[80%] h-[400px] pt-5 pl-3 pr-3">
                <h2 className="text-[30px]">{filteredHero?.name}</h2>
                <h3 className="text-[15px]">{filteredHero?.surname}</h3>
                <br />
                <p className="text-white text-[11px] text-justify">
                  {filteredHero?.description}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              {skillHover === "" ? (
                <img src={filteredHero?.characterPreview} className="w-[70%]" />
              ) : skillHover === skill1 ? (
                <img src={filteredHero?.skill1preview} className="w-[70%]" />
              ) : skillHover === skill2 ? (
                <img src={filteredHero?.skill2preview} className="w-[70%]" />
              ) : (
                <img src={filteredHero?.skill3preview} className="w-[70%]" />
              )}
            </div>
            <div className=" flex justify-center items-center">
              <div className="w-[80%] h-[400px] grid gap-y-[10px] grid-rows-[75px_230px_75px] ">
                <div className="bg-black/30 grid grid-cols-[30%_70%]">
                  <div className="w-full h-[75px] flex justify-center items-center">
                    <CharacterSectionRound>
                      <img
                        src={filteredHero?.weaponImg}
                        className="w-[100%] "
                      />
                    </CharacterSectionRound>
                  </div>
                  <div className=" flex items-center">
                    <div className="leading-[1.25]">
                      <p className="text-[10px] roboto-bold text-white">
                        Weapon
                      </p>
                      <h2 className="text-[25px] text-white">
                        {filteredHero?.weaponsName}
                      </h2>
                    </div>
                  </div>
                </div>
                {skillHover === "" ? (
                  <CharacterStatusPoint
                    level={filteredHero?.level ?? 0}
                    hp={filteredHero?.hp ?? 0}
                    power={filteredHero?.power ?? 0}
                    st={filteredHero?.st ?? 0}
                    def={filteredHero?.def ?? 0}
                  />
                ) : (
                  <div className="bg-black/30 grid grid-rows-[90px_140px]">
                    <div className="grid grid-cols-[30%_70%]">
                      <div className="flex justify-center items-center">
                        <CharacterSectionRound>
                          {skillHover === skill1 ? (
                            <img
                              src={filteredHero?.skill1Icon}
                              className="w-[80%] rounded-full"
                            />
                          ) : skillHover === skill2 ? (
                            <img
                              src={filteredHero?.skill2Icon}
                              className="w-[80%] rounded-full"
                            />
                          ) : (
                            <img
                              src={filteredHero?.skill3Icon}
                              className="w-[80%] rounded-full"
                            />
                          )}
                        </CharacterSectionRound>
                      </div>
                      <div className="flex items-center">
                        <h4 className="text-white text-[20px] fell-english">
                          {skillHover}
                        </h4>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[90%] h-[130px] bg-black/70 ">
                        nanti deskripsinya disini
                      </div>
                    </div>
                  </div>
                )}
                <div className="bg-black/30 grid grid-cols-[25%_25%_25%_25%]">
                  <div className="flex justify-center items-center">
                    <CharacterSectionRound>
                      <h4 className="text-[30px] text-white font-grover">
                        Skills
                      </h4>
                    </CharacterSectionRound>
                  </div>
                  <SkillIcon
                    backgroundImg={`url(${filteredHero?.skill1Icon})`}
                    skillName={filteredHero?.skill1 ?? "UnknownSkill"}
                    handleSkillHover={handleSkillHover}
                    handleSkillLeave={handleSkillLeave}
                  />
                  <SkillIcon
                    backgroundImg={`url(${filteredHero?.skill2Icon})`}
                    skillName={filteredHero?.skill2 ?? "UnknownSkill"}
                    handleSkillHover={handleSkillHover}
                    handleSkillLeave={handleSkillLeave}
                  />
                  <SkillIcon
                    backgroundImg={`url(${filteredHero?.skill3Icon})`}
                    skillName={filteredHero?.skill3 ?? "UnknownSkill"}
                    handleSkillHover={handleSkillHover}
                    handleSkillLeave={handleSkillLeave}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterOverlay;
