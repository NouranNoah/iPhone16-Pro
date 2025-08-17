import React, { useRef, useEffect, useState } from "react";
import imgFile from "../../assets/hero_camera__d95g9w2nnyye_large.jpg";
import mobileImg from "../../assets/Group 2.png";
import imgFileRes from '../../assets/Group 3.png'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cinemasterful() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const phoneRef = useRef(null);
  const titleRef = useRef(null);
  
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 734);

  useEffect(() => {
    // listener لتغيير الصورة عند تغيير حجم الشاشة
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 734);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      tl.to(imgRef.current, { opacity: 0 }, 0);
      tl.to(titleRef.current, { y: -100, opacity: 0 }, 0);

      // الصورة تظهر وتعمل Zoom In
      tl.fromTo(
        phoneRef.current,
        { opacity: 0, scale: 1.5 },
        { opacity: 1, scale: 1, duration: 1 },
        0
      );

      // الصورة تعمل Zoom Out تدريجي
      tl.to(phoneRef.current, { scale: 0.9, duration: 1 }, 0.5);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <h1 ref={titleRef}>
        <h1>New 48MP</h1>
        Ultra Wide camera. Viva la resolution..
      </h1>
      <img
        ref={imgRef}
        className="vidCinema"
        src={imgFile}
        alt="iPhone"
      />
      <img
        ref={phoneRef}
        className="phone-img2"
        src={isSmallScreen ? imgFileRes : mobileImg}
        alt="iPhone"
      />
    </section>
  );
}
