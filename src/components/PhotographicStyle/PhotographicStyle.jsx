"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PhotographicStyle.css";

import img1 from "../../assets/hero_style1__ejjuw3sw3t0m_medium.jpg";
import img2 from "../../assets/hero_style2__gbh1d5shzmie_medium.jpg";
import img3 from "../../assets/hero_style3__ebrovo7velkm_medium.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PhotographicStyle() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = imagesRef.current;

      images.forEach((img, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        // Zoom In لكل صورة
        tl.fromTo(
          img,
          { scale: 1 },
          { scale: 1.2, duration: 1, ease: "power1.inOut" }
        );

        // لو الصورة الأخيرة → نعمل Zoom Out في النهاية
        if (index === images.length - 1) {
          tl.to(img, { scale: 1, duration: 1, ease: "power1.inOut" });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="contentPhoto">
      <h1>Choose your <p>Photographic Style.</p> Change it up. Change it back.</h1>
      <section className="photographic-section" ref={sectionRef}>
      {[img1, img2, img3].map((src, i) => (
        <div className="image-container" key={i}>
          <img
            src={src}
            alt={`photo-${i}`}
            className="photo"
            ref={(el) => (imagesRef.current[i] = el)}
          />
        </div>
      ))}
    </section>
    <p className="pPhotoStleSection">Our latest generation of Photographic Styles gives you greater creative flexibility than ever before, so you can <span>make every photo even more you.</span> And thanks to advances in our image pipeline, you can now reverse any style, anytime. </p>
    </div>
  );
}
