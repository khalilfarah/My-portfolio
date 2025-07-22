import React from "react";
import Uplight from "../../assets/uplight.png";
import { useState, useEffect } from "react";

export default function ScrollTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const ScrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (ScrollY / totalHeight) * 100;
      setProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const borderStyle = {
    background: `conic-gradient(#8a0194 ${progress}%,#28004B ${progress}%)`,
  };

  return (
    <div>
      {backToTopButton && (
        <img
          src={Uplight}
          style={borderStyle}
          className="fixed bottom-[50px] justify-center right-[50px] h-[50px] px-3 py-3     rounded-full mx-auto text-center  cursor-pointer -rotate-90"
          onClick={scrollUp}
        />
      )}
    </div>
  );
}
