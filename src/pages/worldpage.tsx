import { useRef, useState } from "react";
import CharacterBadge from "../features/eldoria-map/character-badge";
import "../styles/world.css";
import KingdomOverlay from "../features/world-overlay/kingdom-overlay";
import useWindowSize from "../hooks/useWindowSize";

const WorldPage = () => {
  const [isKingdom, setIsKingdom] = useState("");

  const handleSetKingdom = (kingdom: string) => {
    setIsKingdom(kingdom);
  };

  type Region = "valdenar" | "sylvara" | "dravakhor" | "nirvalis" | "riftlands";

  type ProfileSrc = {
    [key in Region]: string;
  };

  const profileSrc = useRef<ProfileSrc>({
    valdenar: "/assets/world-page-assets/map-section/human-profile.png",
    sylvara: "/assets/world-page-assets/map-section/elf-profile.png",
    dravakhor: "/assets/world-page-assets/map-section/dwarf-profile.png",
    nirvalis: "/assets/world-page-assets/map-section/ice-soul-profile.png",
    riftlands: "/assets/world-page-assets/map-section/riftlands-profile.png",
  });

  type Label =
    | "labelValdenar"
    | "labelSylvara"
    | "labelDravakhor"
    | "labelNirvalis"
    | "labelRiftlands";

  type LabelKingdom = {
    [key in Label]: string;
  };
  const label = useRef<LabelKingdom>({
    labelValdenar: "assets/world-page-assets/map-section/label-valdenar.png",
    labelSylvara: "assets/world-page-assets/map-section/label-sylvara.png",
    labelDravakhor: "assets/world-page-assets/map-section/label-dravakhor.png",
    labelNirvalis: "assets/world-page-assets/map-section/label-nirvalis.png",
    labelRiftlands: "assets/world-page-assets/map-section/label-riftland.png",
  });

  const { height } = useWindowSize();

  if (height < 600) {
    return (
      <>
        {isKingdom && (
          <KingdomOverlay
            handleSetKingdom={handleSetKingdom}
            isKingdom={isKingdom}
          />
        )}
        <main className="w-full h-[100vh] world-background">
          <div className="flex justify-center items-end">
            <h1 className="underline text-center text-white xl:text-[clamp(20px,3.5vw,60px)] lg:text-[clamp(15px,3vw,60px)] md:text-[clamp(15px,3vw,60px)] sm:text-[clamp(15px,3vw,60px)] text-[clamp(10px,3.5vw,60px)] fell-english">
              The Four Kingdoms: Born from the Celestial Void
            </h1>
          </div>
          <div className="w-full h-[80vh] flex justify-center items-center">
            <div className={`w-full h-full flex justify-center items-center`}>
              <img
                src="/assets/world-page-assets/map-section/world-map-base.png"
                className="w-[90%] h-full"
                alt="map of Eldoria"
              />
              <div className="w-full h-full absolute z-10 map-cover grid grid-cols-[10%_10%_10%_10%_10%_10%_10%_10%_10%]">
                <div></div>
                <div className=" w-full h-full">
                  <div className="xl:mt-[clamp(190px,30vh,250px)] lg:mt-[clamp(190px,27vh,230px)] md:mt-[160%] md:ml-[80%] sm:mt-[220%] mt-[220%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.dravakhor}
                      label={label.current.labelDravakhor}
                      kingdom="Dravakhor"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div></div>
                <div className=" w-full h-full  ">
                  <div className="xl:mt-[clamp(180px,27vh,260px)] lg:mt-[clamp(60px,20vh,170px)] md:mt-[140%] md:ml-[50%] sm:mt-[150%] mt-[150%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.valdenar}
                      label={label.current.labelValdenar}
                      kingdom="Valdenar"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div>
                  <div className="xl:mt-[clamp(10px,3vh,50px)] lg:mt-[clamp(5px,2.5vh,40px)] md:mt-[60%] md:ml-[100%] sm:mt-[20%] mt-[20%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.nirvalis}
                      label={label.current.labelNirvalis}
                      kingdom="Nirvalis"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                  <div className="xl:ml-[45%] xl:mt-[clamp(300px,50vh,500px)] lg:ml-[45%] lg:mt-[clamp(250px,38vh,320px)] md:ml-[100%] md:mt-[250%] sm:mt-[350%] sm:ml-[100%] mt-[350%] ml-[100%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.sylvara}
                      label={label.current.labelSylvara}
                      kingdom="Sylvara"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div>
                  <div className="xl:ml-[45%] xl:mt-[clamp(170px,25vh,260px)] lg:ml-[45%] lg:mt-[clamp(140px,18vh,170px)] md:ml-[80%] md:mt-[140%] sm:mt-[170%] sm:ml-[30%] mt-[170%] ml-[30%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.valdenar}
                      label={label.current.labelValdenar}
                      kingdom="Valdenar"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div>
                  <div className="xl:mt-[clamp(10px,1vh,30px)] lg:mt-[clamp(10px,1vh,30px)] md:mt-[50%] md:ml-[30%] sm:mt-[10%] mt-[10%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.riftlands}
                      label={label.current.labelRiftlands}
                      kingdom="Riftlands"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div></div>
                <div>
                  <div className="xl:mt-[clamp(250px,26vh,270px)] lg:mt-[clamp(230px,23vh,250px)] md:mt-[175%]  sm:mt-[270%] mt-[250%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.valdenar}
                      label={label.current.labelValdenar}
                      kingdom="Valdenar"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        {isKingdom && (
          <KingdomOverlay
            handleSetKingdom={handleSetKingdom}
            isKingdom={isKingdom}
          />
        )}
        <main className="w-full xl:h-[130vh] lg:h-[100vh] md:h-[80vh] sm:h-[150vh] h-[50vh] world-background grid xl:grid-rows-[15vh_100vh] lg:grid-rows-[15vh_80vh] md:grid-rows-[clamp(50px,5vh,300px)_50vh] sm:grid-rows-[15vh_130vh] grid-rows-[10vh_35vh]">
          <div className="flex justify-center items-end">
            <h1 className="underline text-center text-white xl:text-[clamp(20px,3.5vw,60px)] lg:text-[clamp(15px,3vw,60px)] md:text-[clamp(15px,3vw,60px)] sm:text-[clamp(15px,3vw,60px)] text-[clamp(10px,3.5vw,60px)] fell-english">
              The Four Kingdoms: Born from the Celestial Void
            </h1>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className={`w-full flex justify-center items-center`}>
              <img
                src="/assets/world-page-assets/map-section/world-map-base.png"
                className="xl:w-[90%] xl:h-[92vh] lg:w-[90%] lg:h-[clamp(400px,70vh,800px)] md:w-[90%] md:h-[40vh] sm:w-[90%] sm:h-[100vh] w-[90%] h-[25vh]"
                alt="map of Eldoria"
              />
              <div className="xl:w-[91.5%] xl:h-[92vh] lg:w-[clamp(700px,90vw,100vw)] lg:h-[clamp(400px,70vh,800px)] md:w-[90%] md:h-[40vh] sm:w-[90%] sm:h-[100vh] w-[90%] h-[25vh] absolute z-10 map-cover grid grid-cols-[10%_10%_10%_10%_10%_10%_10%_10%_10%]">
                <div></div>
                <div className=" w-full h-full">
                  <div className="xl:mt-[clamp(190px,30vh,250px)] lg:mt-[clamp(190px,27vh,230px)] md:mt-[290%] md:ml-[80%] sm:mt-[220%] mt-[220%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.dravakhor}
                      label={label.current.labelDravakhor}
                      kingdom="Dravakhor"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div></div>
                <div className=" w-full h-full  ">
                  <div className="xl:mt-[clamp(180px,27vh,260px)] lg:mt-[clamp(60px,20vh,170px)] md:mt-[230%] md:ml-[50%] sm:mt-[150%] mt-[150%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.valdenar}
                      label={label.current.labelValdenar}
                      kingdom="Valdenar"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div>
                  <div className="xl:mt-[clamp(10px,3vh,50px)] lg:mt-[clamp(5px,2.5vh,40px)] md:mt-[110%] md:ml-[100%] sm:mt-[20%] mt-[20%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.nirvalis}
                      label={label.current.labelNirvalis}
                      kingdom="Nirvalis"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                  <div className="xl:ml-[45%] xl:mt-[clamp(300px,50vh,500px)] lg:ml-[45%] lg:mt-[clamp(250px,38vh,320px)] md:ml-[130%] md:mt-[400%] sm:mt-[350%] sm:ml-[100%] mt-[350%] ml-[100%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.sylvara}
                      label={label.current.labelSylvara}
                      kingdom="Sylvara"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div>
                  <div className="xl:ml-[45%] xl:mt-[clamp(170px,25vh,260px)] lg:ml-[45%] lg:mt-[clamp(140px,18vh,170px)] md:ml-[120%] md:mt-[230%] sm:mt-[170%] sm:ml-[30%] mt-[170%] ml-[30%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.valdenar}
                      label={label.current.labelValdenar}
                      kingdom="Valdenar"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div>
                  <div className="xl:mt-[clamp(10px,1vh,30px)] lg:mt-[clamp(10px,1vh,30px)] md:mt-[90%] md:ml-[70%] sm:mt-[10%] mt-[10%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.riftlands}
                      label={label.current.labelRiftlands}
                      kingdom="Riftlands"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
                <div></div>
                <div>
                  <div className="xl:mt-[clamp(250px,26vh,270px)] lg:mt-[clamp(230px,23vh,250px)] md:mt-[330%] md:ml-[30%] sm:mt-[270%] mt-[250%]">
                    <CharacterBadge
                      profileRef={profileSrc.current.valdenar}
                      label={label.current.labelValdenar}
                      kingdom="Valdenar"
                      handleSetKingdom={handleSetKingdom}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default WorldPage;
