import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./PhotographicStyle.css";
import img1 from "../../assets/hero_style1__ejjuw3sw3t0m_medium.jpg";
import img2 from "../../assets/hero_style2__gbh1d5shzmie_medium.jpg";
import img3 from "../../assets/hero_style3__ebrovo7velkm_medium.jpg";

export default function ImageReveal() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // clip-path لكل صورة
  const img2Clip = useTransform(scrollYProgress, [0.33, 0.66], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const img3Clip = useTransform(scrollYProgress, [0.66, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const imgScale = useTransform(scrollYProgress, [0.999999, 1], [1, 0.9]); 
  // حركة الخط
  const lineX1 = useTransform(scrollYProgress, [0.33, 0.66], [0, screenWidth * 0.99999]);
  const lineX2 = useTransform(scrollYProgress, [0.66, 1], [0, screenWidth * 0.999999]);


  return (
    <div className="PhotoSection">
    <section className="videoSection" ref={sectionRef}>
      <div className="stickyWrapper" >
        <motion.div className="image-inner" style={{scale: imgScale }}>
          {/* الصورة الأولى */}
          <img src={img1} alt="Style 1" />

          {/* الصورة الثانية */}
          <motion.img src={img2} alt="Style 2" style={{ clipPath: img2Clip }} />

          {/* الصورة الثالثة */}
          <motion.img src={img3} alt="Style 3" style={{ clipPath: img3Clip }} />

          {/* الخط */}
          <motion.div className="reveal-line" style={{ x: lineX1 }} />
          <motion.div className="reveal-line" style={{ x: lineX2 }} />
        </motion.div>
      </div>
    </section>
          <p>Our latest generation of Photographic Styles gives you greater creative flexibility than ever before, so you can make every photo even more you. And thanks to advances in our image pipeline, you can now reverse any style, anytime.</p>

    </div>
  );
}
