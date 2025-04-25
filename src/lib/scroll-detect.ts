// src/lib/TS/scroll-detect.ts

// Fungsi untuk mendapatkan jarak scroll vertical
export const getVerticalScrollDistance = (): number => {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
};

export const addScrollListener = (
  callback: (scrollDistance: number) => void
): (() => void) => {
  // Menyatakan bahwa return adalah fungsi yang mengembalikan void
  const handleScroll = () => {
    const scrollDistance = getVerticalScrollDistance();
    callback(scrollDistance);
  };

  window.addEventListener("scroll", handleScroll);

  // Mengembalikan fungsi cleanup untuk menghapus event listener
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
