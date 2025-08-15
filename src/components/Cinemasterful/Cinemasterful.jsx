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

//   // يبدأ من scale 2 وينزل تدريجي لحد 0.3
//   const imageScale = Math.max(0.3, 2 - progress * 1.7);

//   // يقلل العرض والارتفاع تدريجياً بعد النص
//   const shrinkProgress = progress > 0.5 ? (progress - 0.5) * 2 : 0; // من 0 لحد 1
//   const imageWidth = 600 - shrinkProgress * 400; // من 600px لحد 200px
//   const imageHeight = imageWidth * 0.5; // نسبة الطول للعرض

//   return (
//     <div className="cinemaWrapper">
//       <section ref={sectionRef} className="cinemaSection">
//         {/* <h1
//         style={{
//           transform: `translateY(-${progress * 100}px)`, 
//           opacity: 1 - progress * 2, // يختفي تدريجي
//           transition: "transform 0.1s linear, opacity 0.1s linear",
//         }}
//         >4K 120 fps Dolby Vision.Cinemasterful.</h1> */}
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
//       </section>
//     </div>
//   );
// }

// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ

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
//       const scrolled = Math.min(
//         Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
//         1
//       );
//       setProgress(scrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleScroll);
//     handleScroll(); // لضبط الحالة عند التحميل

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

//   // هنا نتحكم في متى يبدأ الفيديو والعنوان يختفوا والصورة تظهر
//   const threshold = 0.88; // كل ما تزودي الرقم، كل ما الفيديو والعنوان يستمروا أطول

//   const videoOpacity = progress < threshold ? 1 : 0;
//   const imageOpacity = progress < threshold ? 0 : 1;

//   // يبدأ من scale 2 وينزل تدريجي لحد 0.3
//   const imageScale = Math.max(0.3, 2 - progress * 1.7);

//   // يقلل العرض والارتفاع تدريجياً بعد النص
//   const shrinkProgress = progress > threshold ? (progress - threshold) / (1 - threshold) : 0; // من 0 لحد 1
//   const imageWidth = 600 - shrinkProgress * 400; // من 600px لحد 200px
//   const imageHeight = imageWidth * 0.5; // نسبة الطول للعرض

//   // العنوان: يطلع لفوق ويختفي مع اختفاء الفيديو
//   const titleOpacity = Math.max(0, 1 - progress / threshold); 
//   const titleTranslateY = Math.min((progress / threshold) * 200, 200);

//   return (
//     <div className="cinemaWrapper">
//       <section
//         ref={sectionRef}
//         className="cinemaSection"
//         style={{ position: "relative" }}
//       >
//         <h1
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: `translate(-50%, -50%) translateY(-${titleTranslateY}px)`,
//             opacity: titleOpacity,
//             transition: "transform 0.1s linear, opacity 0.1s linear",
//             pointerEvents: "none",
//           }}
//         >
//           4K 120 fps Dolby Vision. Cinemasterful.
//         </h1>

//         <video
//           className="vidCinema"
//           style={{ opacity: videoOpacity, transition: "opacity 0.2s linear" }}
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
//             height: `${imageHeight}px`,
//             transition: "opacity 0.2s linear",
//           }}
//           src={mobileImg}
//           alt="Mobile"
//         />
//       </section>
//     </div>
//   );
// }


import React, { useRef, useEffect, useState } from "react";
import "./Cinemasterful.css";
import videoFile from "../../assets/medium.mp4";
import mobileImg from "../../assets/Group 1.png";

export default function Cinemasterful() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

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

  const threshold = 0.5; // ممكن تزودي الرقم عشان العنوان والفيديو يفضلوا أطول
  const videoOpacity = progress < threshold ? 1 : 0;
  const imageOpacity = progress < threshold ? 0 : 1;

  // العنوان يطلع لفوق تدريجي مع اختفاء الفيديو
  const titleTranslateY = progress < threshold ? progress * 100 : 100;

  // يبدأ من scale 2 وينزل تدريجي لحد 0.3
  const imageScale = Math.max(0.3, 2 - progress * 1.7);

  // يقلل العرض والارتفاع تدريجياً بعد النص
  const shrinkProgress = progress > threshold ? (progress - threshold) * 2 : 0;
  const imageWidth = 600 - shrinkProgress * 400;
  const imageHeight = imageWidth * 0.5;

  return (
    <div className="cinemaWrapper">
      <section ref={sectionRef} className="cinemaSection" style={{ position: "relative" }}>
        
        {/* العنوان */}
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translateY(-${titleTranslateY}px)`,
            margin: 0,
            opacity: videoOpacity,
            transition: "transform 0.3s ease-out, opacity 0.2s linear",
            pointerEvents: "none"
          }}
        >
          4K 120 fps Dolby Vision. Cinemasterful.
        </h1>

        {/* الفيديو */}
        <video
          className="vidCinema"
          style={{
            opacity: videoOpacity,
            transition: "opacity 0.2s linear"
          }}
          src={videoFile}
          autoPlay
          muted
          loop
        />

        {/* الصورة */}
        <img
          className="imgCinema"
          style={{
            opacity: imageOpacity,
            transform: `translate(-50%, -50%) scale(${imageScale})`,
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            transition: "opacity 0.2s linear"
          }}
          src={mobileImg}
          alt="Mobile"
        />
        <p
        style={{
        opacity: imageOpacity,
        transform: `translateY(${(1 - imageOpacity) * 20}px) scale(${0.98 + 0.02 * imageOpacity})`,
        transition: "opacity 0.25s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        position: "absolute",
        bottom: "10%",
        width: "80%",
        textAlign: "center",
        color: "rgba(255,255,255,0.46)",
        fontSize: "14px"
        }}
        >
          A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby Vision
        </p>
      </section>
    </div>
  );
}
