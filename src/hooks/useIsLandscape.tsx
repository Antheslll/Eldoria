import { useEffect, useState } from "react";

export function useIsLandscape() {
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleChange = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleChange);
    window.addEventListener("orientationchange", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
      window.removeEventListener("orientationchange", handleChange);
    };
  }, []);

  return isLandscape;
}
