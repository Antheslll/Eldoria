import SlidingImage from "../features/highlights/sliding-image";
import "../styles/home.css";
export default function Home() {
  return (
    <main className="w-full h-[700px] home-background flex justify-center items-center">
      <div className="w-full h-[500px]  pl-[8%] ">
        <SlidingImage />
      </div>
    </main>
  );
}
