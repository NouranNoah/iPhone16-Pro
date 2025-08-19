import React, { useRef, useEffect, useState } from "react";
import "./space.css";
import videoFile from "../../assets/medium.mp4";
import mobileImg from "../../assets/Group 1.png";

export default function Cinemasterful() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const videoOpacity = progress < 0.5 ? 1 : 0;
  const imageOpacity = progress < 0.5 ? 0 : 1;

  // ✨ تعديل imageScale لتثبيت الحجم بعد ظهور الصورة
  const finalScale = 0.9;
  const imageScale = imageOpacity < 1 ? Math.max(0.5, 2 - progress * 1.7) : finalScale;

  const imageWidth = 600;
  const imageHeight = imageWidth * 0.5;

  // إظهار البراجراف بعد ثانية من ظهور الصورة
  useEffect(() => {
    if (imageOpacity === 1) {
      const timer = setTimeout(() => setShowParagraph(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowParagraph(false);
    }
  }, [imageOpacity]);

  return (
    <div className="cinemaWrapper">
      <h1
        style={{
          transform: `translateY(-${progress * 100}px)`,
          opacity: 1 - progress * 2,
          transition: "transform 0.1s linear, opacity 0.1s linear",
        }}
      >
        4K 120 fps Dolby Vision.Cinemasterful.
      </h1>

      <section ref={sectionRef} className="cinemaSection">
        <div className="videoOverlay"></div>
        <video
          className="vidCinema"
          style={{ opacity: videoOpacity }}
          src={videoFile}
          autoPlay
          muted
          loop
        />
        <img
          className="imgCinema"
          style={{
            opacity: imageOpacity,
            transform: `translate(-50%, -50%) scale(${imageScale})`,
            width: `${imageWidth}px`,
            height: `${imageHeight}px`
          }}
          src={mobileImg}
          alt="Mobile"
        />

        <p className={`cinemaText ${showParagraph ? "show" : ""}`}>
          A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby Vision
        </p>
      </section>
    </div>
  );
}
