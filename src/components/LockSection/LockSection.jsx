import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LockSection.css";

import img1 from "../../assets/tone__cjmevyop7r7m_medium.jpg";
import img2 from "../../assets/tone2.jpg";
import img3 from "../../assets/tone3.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function LockSection() {
  const sectionRef = useRef(null);

  const slides = [
    {
      img: img1,
      title: "Lock in your look.",
      text:
        "We’ve created new styles that let you dial in your exact desired look with more advanced skin-tone rendering and set it across your photos.",
    },
    {
      img: img2,
      title: "Align with your aesthetic.",
      text:
        "Our improved image pipeline also enables more creative styles, which allow you to customize the different moods of a photo through color.",
    },
    {
      img: img3,
      title: "Make the most of your megapixels.",
      text:
        "Personalize every style even more with the new control pad, which makes it easy to adjust tone and color simultaneously. You can also use the slider to adjust the intensity of the specific colors, instead of applying a one-size-fits-all approach.",
    },
  ];

  useEffect(() => {
  const ctx = gsap.context(() => {
    const texts = gsap.utils.toArray(".text-slide");
    const images = gsap.utils.toArray(".img-slide");

    gsap.set(texts, { autoAlpha: 0 });
    gsap.set(images, { autoAlpha: 0 });
    gsap.set(texts[0], { autoAlpha: 1 });
    gsap.set(images[0], { autoAlpha: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=" + (slides.length * window.innerHeight),
        scrub: true,
        pin: true,
        pinSpacing: true, // 👈 لازم يتساب
      },
    });

    slides.forEach((_, i) => {
      if (i < slides.length - 1) {
        tl.to(texts[i], { autoAlpha: 0, y: -100 })
          .to(images[i], { autoAlpha: 0 }, "<")
          .to(texts[i + 1], { autoAlpha: 1, y: 0 })
          .to(images[i + 1], { autoAlpha: 1 }, "<");
      }
    });

    // Fade out في الآخر عشان ما يغطيش اللي بعده
    tl.to(texts[slides.length - 1], { autoAlpha: 0, y: -50 })
      .to(images[slides.length - 1], { autoAlpha: 0 }, "<");
  }, sectionRef);

  return () => ctx.revert();
}, [slides]);


  return (
    <div className="LockSection" ref={sectionRef}>
      <div className="textLock">
        {slides.map((s, i) => (
          <div key={i} className="text-slide">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <div className="imgLock">
        {slides.map((s, i) => (
          <img key={i} src={s.img} className="img-slide" alt="" />
        ))}
      </div>

    </div>
  );
}
