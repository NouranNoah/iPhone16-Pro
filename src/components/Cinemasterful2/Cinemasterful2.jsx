// import React, { useRef, useEffect, useState } from "react";
// import img1File from "../../assets/hero_camera__d95g9w2nnyye_large.jpg";
// import mobileImg from "../../assets/Group 2.png";
// import imgFileRes from '../../assets/Group 3.png'

// export default function Cinemasterful() {
//   const sectionRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 734);

//   useEffect(() => {
//     // listener لتغيير الصورة عند تغيير حجم الشاشة
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 734);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const scrolled = Math.min(
//         Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
//         1
//       );
//       setProgress(scrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const videoOpacity = progress < 0.5 ? 1 : 0;
//   const imageOpacity = progress < 0.5 ? 0 : 1;

 
//   const finalScale = 0.7;
//   const imageScale = imageOpacity < 1 ? Math.max(0.5, 2 - progress * 1.7) : finalScale;

//   const imageWidth = 900;
//   const imageHeight = imageWidth * 0.5;

  
  

//   return (
//     <div className="cinemaWrapper">
//       <h1
//         style={{
//           transform: `translateY(-${progress * 100}px)`,
//           opacity: 1 - progress * 2,
//           transition: "transform 0.1s linear, opacity 0.1s linear",
//         }}
//       >
//        New 48MP Ultra Wide camera.Viva la resolution.
//       </h1>

//       <section
//   ref={sectionRef}
//   className="cinemaSection"
//   style={{
//     height: `${progress < 0.5 ? 100 : 50 + (1 - progress) * 50}vh`,
//     transition: "height 0.5s ease"
//   }}
// >
//   <div className="videoOverlay"></div>
//   <img
//     className="vidCinema"
//     style={{ opacity: videoOpacity }}
//     src={img1File}
//     autoPlay
//     muted
//     loop
//   />
//   <img
//     className="imgCinema"
//     style={{
//       opacity: imageOpacity,
//       transform: `translate(-50%, -50%) scale(${imageScale})`,
//       width: `${imageWidth}px`,
//       height: `${imageHeight}px`
//     }}
//     src={isSmallScreen ? imgFileRes : mobileImg}
//     alt="Mobile"
//   />
// </section>

//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1File from "../../assets/hero_camera__d95g9w2nnyye_large.jpg";
import imageFile from "../../assets/Group 2.png";
import imgFileRes from '../../assets/Group 3.png'

export default function Cinemasterful2() {
  const sectionRef = useRef(null);


  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 734);
   useEffect(() => {
     // listener لتغيير الصورة عند تغيير حجم الشاشة
     const handleResize = () => {
       setIsSmallScreen(window.innerWidth <= 734);
     };
     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);



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
const imageScale = useTransform(scrollYProgress, [0.1, 1], [2, 0.5]); 


  

  return (
    <section ref={sectionRef} className="videoSection">
      <div className="stickyWrapper">
        
        {/* الفيديو */}
        <motion.img
          src={img1File}
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
          New 48MP Ultra Wide camera.Viva la resolution.
        </motion.h1>

        {/* الصورة */}
        <motion.img
          src={isSmallScreen ? imgFileRes : imageFile}
          alt="reveal"
          style={{ opacity: imageOpacity, scale: imageScale }}
          className="bgMedia"
        />

        
      </div>
    </section>
  );
}
