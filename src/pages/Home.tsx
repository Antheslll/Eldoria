import HorizontalSlidingImage from "../features/highlights/horizontal-sliding-image";
import VerticalSlidingImage from "../features/highlights/vertical-sliding-image/vertical-sliding-image";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/home.css";
export default function Home() {
  const { width } = useWindowSize();

  if (width < 1024) {
    return <VerticalSlidingImage />;
  } else {
    return <HorizontalSlidingImage />;
  }
}
