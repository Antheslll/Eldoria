import { Link } from "react-router-dom";

const StoryDisabled = () => {
  const copyUrl = () => {
    const fullUrl = window.location.href;

    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/story-page-asset/cover.png")` }}
    >
      <div className="w-full h-full bg-black/80 flex flex-col gap-5 justify-center items-center">
        <h5 className="font-pirata text-[3vw] text-center text-white">
          "For the most immersive experience of the tale — the rise of the Blade
          of Light — we recommend viewing on a wider screen, where the echoes of
          the celestial void can truly unfold."
        </h5>
        <Link to="/">
          <button
            className={`w-[50vw] h-[6vw] text-[2.8vw] font-pirata border-2 border-white text-white lg:rounded-[8px]  rounded-[13px] cursor-pointer `}
          >
            Return to Base
          </button>
        </Link>
        <button
          className={`w-[50vw] h-[6vw] text-[2.8vw] font-pirata border-2 border-white text-white lg:rounded-[8px]  rounded-[13px] cursor-pointer `}
          onClick={copyUrl}
        >
          Read it Later!
        </button>
      </div>
    </div>
  );
};

export default StoryDisabled;
