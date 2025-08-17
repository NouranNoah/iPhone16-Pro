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
  const lineRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
  gsap.set(videoRef.current, { opacity: 1 });
  gsap.set(phoneRef.current, { 
    opacity: 0, 
    scale: 1.2,
    transformOrigin: "center center"
  });
  gsap.set(lineRef.current, { width: 0 });
  gsap.set(paraRef.current, { opacity: 0, y: 50 });

  let ctx = gsap.context(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // 1️⃣ الفيديو يختفي
    tl.to(videoRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    }, 0.3);

    // 2️⃣ الصورة تظهر فول سكرين
    tl.to(phoneRef.current, {
      opacity: 1,
      scale: 1.2,
      duration: 0.8,
      ease: "power2.out"
    }, 0.8);

    // 3️⃣ العنوان يختفي
    tl.to(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, 1.5);

    // 4️⃣ الصورة تصغر وتثبت في النص
    tl.to(phoneRef.current, {
      scale: 0.5,   
      duration: 2,
      ease: "power2.inOut"
    }, 1.5);

    // 5️⃣ بعد ما تخلص الصورة التصغير → البادينج يبدأ
    tl.to(sectionRef.current, {
      padding: " 30%",   
      duration: 1.5,
      ease: "power2.inOut"
    }, ">");   // 👈 ">" معناها يبدأ بعد اللي قبله ما يخلص

    // 6️⃣ الخط يتمدد
    tl.to(lineRef.current, {
      width: "100%",
      duration: 1.2,
      ease: "power2.inOut"
    }, 4.5);

    // 7️⃣ البرجراف يظهر
    tl.to(paraRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, 4.7);
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

      {/* الخط */}
      <div ref={lineRef} className="animated-line"></div>

      {/* البرجراف */}
      <p ref={paraRef} className="hero-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Amet dolore pariatur similique alias laudantium fuga quod quia ratione.
        Non praesentium, rerum debitis quo cumque facere minus!
        Eos esse accusamus minima!
      </p>
    </section>
  );
}
