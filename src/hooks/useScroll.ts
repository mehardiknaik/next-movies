import React, { useEffect, useState } from "react";

const useScroll = (threshold: number) => {
    const [isTop, setisTop] = useState(true);
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY < threshold) {
        setisTop(true);
      } else setisTop(false);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  });

  return isTop;
};

export default useScroll;
