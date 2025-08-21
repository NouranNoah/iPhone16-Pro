import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Space.css";
import videoFile from "../../assets/medium.mp4";
import imageFile from "../../assets/Group 1.png";

export default function VideoSection() {
  const sectionRef = useRef(null);
  
  // متابعة الاسكرول
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], 
  });

  // الفيديو
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);

  // التيتل مع الفيديو
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); 
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]); 

  // الصورة
  // الصورة: تظهر تدريجي مع زووم أوت أقوى
const imageOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
const imageScale = useTransform(scrollYProgress, [0.5, 1], [2, 0.5]); 


  // البرجراف (يظهر بعد الصورة مباشرة ويطلع لفوق شوية)
  const paragraphOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const paragraphY = useTransform(scrollYProgress, [0.9, 1], [50, 0]);

  return (
    <section ref={sectionRef} className="videoSection">
      <div className="stickyWrapper">
        
        {/* الفيديو */}
        <motion.video
          src={videoFile}
          autoPlay
          muted
          playsInline
          style={{ opacity: videoOpacity }}
          className="bgMedia"
        />

        {/* التيتل */}
        <motion.h1
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
          className="videoTitle"
        >
          4K 120 fps Dolby Vision. Cinemasterful.
        </motion.h1>

        {/* الصورة */}
        <motion.img
          src={imageFile}
          alt="reveal"
          style={{ opacity: imageOpacity, scale: imageScale }}
          className="bgimg"
        />

        {/* البرجراف */}
        <motion.p
          style={{ opacity: paragraphOpacity, y: paragraphY }}
          className="videoParagraph"
        >
          A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby Vision
        </motion.p>
      </div>
    </section>
  );
}
