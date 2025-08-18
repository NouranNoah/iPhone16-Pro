import React, { useEffect, useRef } from "react";
import "./Space.css";
import videoFile from "../../assets/medium.mp4";
import mobileImg from "../../assets/Group 1.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cinemasterful() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      // 1️⃣ الفيديو يختفي فجأة
      tl.to(videoRef.current, { opacity: 0, duration: 0.2 }, 0);

      // 2️⃣ الصورة تظهر بعد ما الفيديو يختفي
      tl.fromTo(
        phoneRef.current,
        { opacity: 0, scale: 1 },
        { opacity: 1, scale: 1, duration: 0.3 },
        0.2
      );

      // 3️⃣ الصورة تتقلص وتثبت في النص
      tl.to(phoneRef.current, {
        scale: 0.85,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <video ref={videoRef} src={videoFile} autoPlay muted loop />
      <img
        ref={phoneRef}
        src={mobileImg}
        alt="iPhone"
        className="phone-img"
      />
    </section>
  );
}