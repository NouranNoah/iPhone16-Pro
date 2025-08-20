
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./LockSection.css";

import img1 from "../../assets/tone__cjmevyop7r7m_medium.jpg";
import img2 from "../../assets/tone2.jpg";
import img3 from "../../assets/tone3.jpg";

export default function LockSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  
  const img1Op = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const img2Op = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const img3Op = useTransform(scrollYProgress, [0.66, 1], [0, 1]);


  const text1Y = useTransform(scrollYProgress, [0, 0.33], [0, -600]);
  const text2Y = useTransform(scrollYProgress, [0.33,0.44, 0.66], [620,0, -600]);
  const text3Y = useTransform(scrollYProgress, [0.66, 1], [620, 0]);


  return (
    <div className="LockSection" ref={sectionRef}>
      <div className="stickyWrapperr">
        {/* النصوص */}
        <div className="textLock">
          
          <div className="hidediv">
            <motion.div style={{ y: text1Y,  }}
             transition={{ duration: 0.9, ease: "easeInOut" }}
            className="divText">
            <h1>Lock in your look.</h1>
            <p>We’ve created new styles that let you dial in your exact desired look with more advanced skin-tone rendering and set it across your photos.</p>
          </motion.div>
          <motion.div style={{ y: text2Y,  }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
           className="divText">
            <h1>Align with your aesthetic.</h1>
            <p>Our improved image pipeline also enables more creative styles, which allow you to customize the different moods of a photo through color.</p>
          </motion.div>

          <motion.div style={{ y: text3Y, }} 
           transition={{ duration: 0.9, ease: "easeInOut" }}
          className="divText tt">
            <h1>Make the most of your megapixels.</h1>
            <p>Personalize every style even more with the new control pad, which makes it easy to adjust tone and color simultaneously. You can also use the slider to adjust the intensity of the specific colors, instead of applying a one-size-fits-all approach.</p>
          </motion.div>
          </div>
          
        </div>

        {/* الصور */}
        <div className="imgLock">
          <motion.img
            style={{ opacity: img1Op }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={img1}
            className="img-slide"
          />
          <motion.img
            style={{ opacity: img2Op }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={img2}
            className="img-slide"
          />
          <motion.img
            style={{ opacity: img3Op }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={img3}
            className="img-slide"
          />
        </div>
      </div>

    </div>
  );
}
