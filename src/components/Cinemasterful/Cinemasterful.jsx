// import React, { useEffect, useRef } from "react";
// import "./Cinemasterful.css";
// import videoFile from "../../assets/medium.mp4";
// import mobileImg from "../../assets/Group 1.png";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Cinemasterful() {
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const phoneRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.to(videoRef.current, {
//         opacity: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//           pin: true,
//         },
//       });

//       gsap.fromTo(
//         phoneRef.current,
//         { opacity: 0, scale: 1.5 },
//         {
//           opacity: 1,
//           scale: 0.5,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "center center",
//             end: "bottom top",
//             scrub: true,
//             pin:true
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="hero-section">
//       <video ref={videoRef} src={videoFile} autoPlay muted loop />
//       <img ref={phoneRef} src={mobileImg} alt="iPhone" className="phone-img" />
//     </section>
//   );
// }

import React, { useRef, useEffect } from "react";
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
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      // الفيديو والعنوان يختفوا
      tl.to(videoRef.current, { opacity: 0 }, 0);
      tl.to(titleRef.current, { y: -100, opacity: 0 }, 0);

      // الصورة تظهر وتعمل Zoom In
      tl.fromTo(
        phoneRef.current,
        { opacity: 0, scale: 1.5 },
        { opacity: 1, scale: 1, duration: 1 },
        0
      );

      // الصورة تعمل Zoom Out تدريجي
      tl.to(phoneRef.current, { scale: 0.7, duration: 1 }, 0.5);

      // النص يظهر بعد تثبيت الصورة
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 },
        1.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <h1 ref={titleRef}>4K 120 fps Dolby Vision. Cinemasterful.</h1>
      <video
        ref={videoRef}
        className="vidCinema"
        src={videoFile}
        autoPlay
        muted
        loop
        playsInline
      />
      <img
        ref={phoneRef}
        className="phone-img"
        src={mobileImg}
        alt="iPhone"
      />
      <p ref={textRef}>
        Cinematic experience redefined with immersive details.
      </p>
    </section>
  );
}
