// import React, { useState, useEffect } from 'react';
// import './HeroSection.css';
// import TiltedImg from '../../assets/hero_endframe__b3cjfkquc2s2_xlarge.jpg';
// import StraightImg from '../../assets/hero_startframe__4pqj154zt8ym_xlarge.jpg';

// export default function HeroSection() {
//   const [showStraight, setShowStraight] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowStraight(true);
//     }, 1000); 

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="HeroSectionContent">
//       <img
//         src={TiltedImg}
//         alt="Tilted iPhone"
//         className={`phone ${showStraight ? 'hide' : 'show'}`}
//       />
//       <img
//         src={StraightImg}
//         alt="Straight iPhone"
//         className={`phone ${showStraight ? 'show' : 'hide'}`}
//       />

//       <h1>iPhone 16 Pro</h1>
//       <button className="buyBtn">Buy</button>
//     </div>
//   );
// }

// /////////////////////////////
// import React, { useState, useEffect } from 'react';
// import './HeroSection.css';

// // صور العرض (ديسكتوب)
// import TiltedLandscape from '../../assets/hero_startframe__4pqj154zt8ym_xlarge.jpg';
// import StraightLandscape from '../../assets/hero_endframe__b3cjfkquc2s2_xlarge.jpg';


// // صور الطول (موبايل)
// import TiltedPortrait from '../../assets/hero_startframe__2phone.jpg';
// import StraightPortrait from '../../assets/hero_endframe__b3cjfkquc2s2_xsmall_2x.jpg'; 

// export default function HeroSection() {
//   const [showStraight, setShowStraight] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // detect screen size changes
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowStraight(true);
//     }, 2000); // يبدأ بعد ثانيتين
//     return () => clearTimeout(timer);
//   }, []);

//   const tiltedImg = isMobile ? TiltedPortrait : TiltedLandscape;
//   const straightImg = isMobile ? StraightPortrait : StraightLandscape;

//   return (
//     <div className="HeroSectionContent">
//       <img
//         src={tiltedImg}
//         alt="Tilted iPhone"
//         className={`phone ${showStraight ? 'hide' : 'show'}`}
//       />
//       <img
//         src={straightImg}
//         alt="Straight iPhone"
//         className={`phone ${showStraight ? 'show' : 'hide'}`}
//       />

//       <h1>iPhone 16 Pro</h1>
//       <button className="buyBtn">Buy</button>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

import videoDesktop from '../../assets/medium herosection.mp4';
import videoMobile from '../../assets/hersoSectionxsmall_2x.mp4';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef(null);

  // تحديث حالة الموبايل أو الديسكتوب
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // تأخير التشغيل
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanPlay(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // تشغيل الفيديو مرة واحدة
  useEffect(() => {
    if (canPlay && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay prevented:", err);
      });

      const handleEnded = () => {
        videoRef.current.pause();
      };

      videoRef.current.addEventListener('ended', handleEnded);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, [canPlay]);

  return (
    <div className="HeroSectionContent">
      <video
        ref={videoRef}
        src={isMobile ? videoMobile : videoDesktop}
        autoPlay
        muted
        playsInline
      ></video>
      <div className="HeroOverlay">
        <h1>iPhone 16 Pro</h1>
        <button className="buyBtn">Buy</button>
      </div>
    </div>
  );
}
