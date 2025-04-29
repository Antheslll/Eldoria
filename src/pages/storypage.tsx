import StoryCover from "../features/story-section/front-cover/story-cover";
import { slideData } from "../data/slide-data";
import StorySlide from "../features/story-section/slide/story-slide";
import { useState } from "react";
import StoryBackCover from "../features/story-section/back-cover/story-back-cover";
const StoryPage = () => {
  const [slideNow, setSlideNow] = useState<string>("front-cover");
  const [slideAppear, setSlideAppear] = useState("front-cover");
  const handleSlide = (slide: string) => {
    setSlideAppear(slide);
    setTimeout(() => {
      setSlideNow(slide);
    }, 400);
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-black">
        <StoryCover
          text="The Legend of the luminous Blade"
          slideNow={slideNow}
          handleSlide={handleSlide}
          slideAppear={slideAppear}
        />
        {slideData.map((slide) => (
          <StorySlide
            backgroundImg={slide?.slideImageRef}
            slideName={slide?.name}
            slideText={slide?.text}
            prev={slide?.prev}
            next={slide?.next}
            handleSlide={handleSlide}
            slideAppear={slideAppear}
            slideNow={slideNow}
          />
        ))}
        <StoryBackCover
          slideNow={slideNow}
          handleSlide={handleSlide}
          slideAppear={"back-cover"}
          text="The End"
        />
      </div>
    </>
  );
};

export default StoryPage;
