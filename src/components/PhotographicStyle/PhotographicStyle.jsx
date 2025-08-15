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
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%", // مدة الحركة
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.fromTo(
        imagesRef.current[0],
        { scale: 1 },
        { scale: 1.2, duration: 1, ease: "power1.inOut" }
      );

      tl.fromTo(
        imagesRef.current[1],
        { clipPath: "inset(0 100% 0 0)", scale: 1 },
        { clipPath: "inset(0 0% 0 0)", scale: 1.2, duration: 1, ease: "none" },
        "+=0.3"
      );
      tl.fromTo(
        lineRef.current,
        { x: "-100vw" },
        { x: "100vw", duration: 1, ease: "none" },
        "<"
      );

      tl.fromTo(
        imagesRef.current[2],
        { clipPath: "inset(0 100% 0 0)", scale: 1 },
        { clipPath: "inset(0 0% 0 0)", scale: 1.2, duration: 1, ease: "none" },
        "+=0.3"
      );
      tl.fromTo(
        lineRef.current,
        { x: "100vw" },
        { x: "-100vw", duration: 1, ease: "none" },
        "<"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="contentPhoto">
      <h1>
        Choose your <p>Photographic Style</p>. Change it up. Change it back.
      </h1>

      <section className="photographic-section" ref={sectionRef}>
        <div className="image-container">
          {[img1, img2, img3].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`img-${i}`}
              className="photo"
              ref={(el) => (imagesRef.current[i] = el)}
            />
          ))}
          <div className="moving-line" ref={lineRef}></div>
        </div>
      </section>

      {/* مسافة بعد السيكشن لتجنب التغطية */}
      <div className="afterSectionSpacer"></div>

      <p className="pPhotoStleSection">
        Our latest generation of Photographic Styles gives you greater creative
        flexibility than ever before, so you can <span>make every photo even more you.</span> And thanks to advances in our image pipeline, you can now reverse any style, anytime.
      </p>
    </div>
  );
}
