// import React, { useRef, useEffect, useState } from "react";
// import "./Space.css";
// import videoFile from "../../assets/medium.mp4";
// import mobileImg from "../../assets/Group 1.png";

// export default function Cinemasterful() {
//   const sectionRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [showParagraph, setShowParagraph] = useState(false);

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

//   // ✨ تعديل imageScale لتثبيت الحجم بعد ظهور الصورة
//   const finalScale = 0.9;
//   const imageScale = imageOpacity < 1 ? Math.max(0.5, 2 - progress * 1.7) : finalScale;

//   const imageWidth = 600;
//   const imageHeight = imageWidth * 0.5;

//   // إظهار البراجراف بعد ثانية من ظهور الصورة
//   useEffect(() => {
//     if (imageOpacity === 1) {
//       const timer = setTimeout(() => setShowParagraph(true), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setShowParagraph(false);
//     }
//   }, [imageOpacity]);

//   return (
//     <div className="cinemaWrapper">
//       <h1
//         style={{
//           transform: `translateY(-${progress * 100}px)`,
//           opacity: 1 - progress * 2,
//           transition: "transform 0.1s linear, opacity 0.1s linear",
//         }}
//       >
//         4K 120 fps Dolby Vision.Cinemasterful.
//       </h1>

//       <section ref={sectionRef} className="cinemaSection">
//         <div className="videoOverlay"></div>
//         <video
//           className="vidCinema"
//           style={{ opacity: videoOpacity }}
//           src={videoFile}
//           autoPlay
//           muted
//           loop
//         />
//         <img
//           className="imgCinema"
//           style={{
//             opacity: imageOpacity,
//             transform: `translate(-50%, -50%) scale(${imageScale})`,
//             width: `${imageWidth}px`,
//             height: `${imageHeight}px`
//           }}
//           src={mobileImg}
//           alt="Mobile"
//         />

//         <p className={`cinemaText ${showParagraph ? "show" : ""}`}>
//           A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby Vision
//         </p>
//       </section>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import "./Space.css";
// import videoFile from "../../assets/medium.mp4";
// import imageFile from "../../assets/Group 1.png"
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function VideoSection() {
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(imageRef.current, { scale: 1.5, opacity: 0 });

//       ScrollTrigger.create({
//   trigger: sectionRef.current,
//   start: "top center",  
//   end: "+=200%",
//   pin: true,
//   scrub: true,
//   pinSpacing: true,
//   onUpdate: (self) => {
//     if (self.progress < 0.5) {
//       gsap.to(videoRef.current, { opacity: 1, duration: 0.5 });
//       gsap.to(imageRef.current, { opacity: 0, scale: 1.5, duration: 0.5 });
//     } else {
//       gsap.to(videoRef.current, { opacity: 0, duration: 0.5 });
//       gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 1 });
//     }
//   },
// });


//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="videoSection">
//       <video ref={videoRef} src={videoFile} autoPlay muted playsInline />
//       <img ref={imageRef} src={imageFile} alt="reveal" />
//     </section>
//   );
// }




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
const imageScale = useTransform(scrollYProgress, [0.1, 1], [2, 0.8]); 


  // البرجراف (يظهر بعد الصورة مباشرة ويطلع لفوق شوية)
  const paragraphOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const paragraphY = useTransform(scrollYProgress, [0.6, 1], [50, 0]);

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
          className="bgMedia"
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
