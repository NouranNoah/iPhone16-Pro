// import React, { useRef, useEffect, useState } from "react";
// import "./Cinemasterful.css";
// import videoFile from "../../assets/medium.mp4";
// import mobileImg from "../../assets/Group 1.png";

// export default function Cinemasterful() {
//   const sectionRef = useRef(null);
//   const [progress, setProgress] = useState(0);
  

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // progress من 0 لـ 1 حسب scroll
//       const scrolled = Math.min(
//         Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
//         1
//       );
//       setProgress(scrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // opacity و scale حسب scroll
//   const videoOpacity = progress < 0.5 ? 1 : 0; // الفيديو يختفي بعد النص
//   const imageScale = 2 - progress * 1.5; // يبدأ من 2 وينزل تدريجي
//   const imageOpacity = progress > 0.5 ? 1 : 0; // الصورة تظهر بعد النص
//   const imageWidth = 600 - progress * 300; // من 600px لـ 300px
//   const imageHeight = imageWidth * 0.5;

//   return (
//     <div className="section-video-and-audio" ref={sectionRef}>
//       <div className="video-audio-hero">
//         <div className="sticky-container">
//           <div className="sticky-content">
//             <video
//               className="hero-video"
//               src={videoFile}
//               autoPlay
//               muted
//               loop
//               style={{ opacity: videoOpacity }}
//             />
//             <img
//               src={mobileImg}
//               alt="mobile"
//               className="hero-device"
//               style={{
//                 transform: `translate(-50%, -50%) scale(${imageScale})`,
//                 opacity: imageOpacity,
//                 width: `${imageWidth}px`,
//                 height: `${imageHeight}px`,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

Cinemasterful.jsx
import React, { useEffect, useRef } from "react";
import "./Cinemasterful.css";
import videoFile from "../../assets/medium.mp4";
import mobileImg from "../../assets/Group 1.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cinemasterful() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const phoneRef = useRef(null);
  const titleRef = useRef(null);
  console.log(typeof ScrollTrigger);


  useEffect(() => {
  gsap.set(videoRef.current, { opacity: 0 });
  gsap.set(phoneRef.current, { opacity: 0 });

  let ctx = gsap.context(() => {
    // أول حاجة: لما يدخل السيكشن نفسه -> يبان
    gsap.to(sectionRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // أول ما السيكشن يدخل من تحت
        toggleActions: "play none none reverse"
      }
    });

    // التايملاين الأساسي
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",      // يبدأ أول ما السيكشن يثبت فوق
        end: "+=100%",
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    tl.to(videoRef.current, { opacity: 1, duration: 0.3, ease: "power2.inOut" }, 0);

    tl.to(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    }, 0.2);

    tl.to(videoRef.current, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, 0.3);

    tl.fromTo(
      phoneRef.current,
      { opacity: 0, scale: 1.3, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" },
      0.6
    );

    tl.to(phoneRef.current, { scale: 0.75, y: -30, ease: "power2.inOut", duration: 0.8 }, 1.4);
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section ref={sectionRef} className="hero-section">
      <h1 ref={titleRef} className="hero-title">
        4K 120 fps Dolby Vision. Cinemasterful.
      </h1>
      
      <video 
        ref={videoRef} 
        src={videoFile} 
        autoPlay 
        muted 
        loop 
        playsInline
      />
      
      <img
        ref={phoneRef}
        src={mobileImg}
        alt="iPhone"
        className="phone-img"
      />
    </section>
  );
}
