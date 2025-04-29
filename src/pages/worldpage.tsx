import { useRef, useState } from "react";
import CharacterBadge from "../features/eldoria-map/character-badge";
import "../styles/world.css";
import KingdomOverlay from "../features/world-overlay/kingdom-overlay";

const WorldPage = () => {
  const [isKingdom, setIsKingdom] = useState("");

  const handleSetKingdom = (kingdom: string) => {
    return setIsKingdom(kingdom);
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

  return (
    <>
      {isKingdom && (
        <KingdomOverlay
          handleSetKingdom={handleSetKingdom}
          isKingdom={isKingdom}
        />
      )}
      <main className="w-full h-[900px] world-background grid grid-rows-[150px_759px]">
        <div className="flex justify-center items-end">
          <h1 className="underline text-white text-[40px] fell-english">
            The Four Kingdoms: Born from the Celestial Void
          </h1>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className={`w-full flex justify-center items-center`}>
            <img
              src="/assets/world-page-assets/map-section/world-map-base.png"
              className="w-[90%]"
              alt="map of Eldoria"
            />
            <div className="w-[90%] h-[50vw] absolute z-10 map-cover grid grid-cols-[10%_10%_10%_10%_10%_10%_10%_10%_10%]">
              <div></div>
              <div className=" w-full h-full ">
                <div className="mt-[200%]">
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
                <div className="mt-[130%]">
                  <CharacterBadge
                    profileRef={profileSrc.current.valdenar}
                    label={label.current.labelValdenar}
                    kingdom="Valdenar"
                    handleSetKingdom={handleSetKingdom}
                  />
                </div>
              </div>
              <div>
                <div className="mt-[20%]">
                  <CharacterBadge
                    profileRef={profileSrc.current.nirvalis}
                    label={label.current.labelNirvalis}
                    kingdom="Nirvalis"
                    handleSetKingdom={handleSetKingdom}
                  />
                </div>
                <div className="ml-[45%] mt-[330%]">
                  <CharacterBadge
                    profileRef={profileSrc.current.sylvara}
                    label={label.current.labelSylvara}
                    kingdom="Sylvara"
                    handleSetKingdom={handleSetKingdom}
                  />
                </div>
              </div>
              <div>
                <div className="ml-[45%] mt-[160%]">
                  <CharacterBadge
                    profileRef={profileSrc.current.valdenar}
                    label={label.current.labelValdenar}
                    kingdom="Valdenar"
                    handleSetKingdom={handleSetKingdom}
                  />
                </div>
              </div>
              <div>
                <div className="mt-[10%]">
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
                <div className="mt-[230%]">
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
};

export default WorldPage;
