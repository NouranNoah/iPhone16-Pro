// import React, { useRef, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import smile from "../assets/camera_settings_endframe__dav5isd8emqa_xlarge.jpg"; // غيّري المسارات حسب صورك
// import sad from "../assets/camera_settings_startframe__d46p9szb5o2u_xlarge.jpg";
// import "../components/sss.css";



// export default function AppleStyleAuto() {
//   const root = useRef(null);
//   const sadRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(sadRef.current, { opacity: 0 });

//       gsap.to(sadRef.current, {
//         opacity: 1,
//         duration: 2,  // مدة التحويل
//         delay: 1,     // يبدأ بعد ثانية
//         ease: "power2.inOut"
//       });
//     }, root);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="apple-wrap">
//       <div className="apple-stage" ref={root}>
//         <img src={smile} alt="smile" className="apple-img base" />
//         <img ref={sadRef} src={sad} alt="sad" className="apple-img overlay" />
//       </div>
//     </section>
//   );
// }
// ظظظظظظظظظظظظظظظظظظظظ

// import React, { useRef, useEffect } from 'react';
// import './A18ProSection.css';
// import vidBG from '../../assets/medium (A18).mp4';

// export default function A18ProSection() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (videoRef.current) {
//           if (entry.isIntersecting) {
//             // تشغيل الفيديو عند ظهور السيكشن
//             videoRef.current.play().catch(err => {
//               console.log('Autoplay blocked:', err);
//             });
//           } else {
//             // إيقاف الفيديو عند الخروج من السيكشن
//             videoRef.current.pause();
//             videoRef.current.currentTime = 0;
//           }
//         }
//       },
//       { threshold: 0.3 } // 30% من السيكشن لازم يظهر
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <div className='A18ProSection' ref={sectionRef}>
//       <video
//         ref={videoRef}
//         src={vidBG}
//         muted
//         playsInline
//         loop
//         preload="auto"
//         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//       />
//       <h1>
//         <p>A18 Pro.</p>A colossally capable chip.
//       </h1>
//       <p>
//         A phenomenally powerful chip that brings <span>exceptional speed and efficiency</span> to iPhone 16 Pro. 
//         It also drives advanced video and photo features like Camera Control — and delivers outstanding graphics performance for AAA gaming.
//       </p>
//       <div className='specs'>
//         <div>
//           <p><span>New 16-core Neural Engine </span>makes on-device intelligence faster and more efficient</p>
//           <p><span>New 6-core CPU</span>, the fastest in a smartphone, runs complex workloads with less power</p>
//         </div>
//         <div>
//           <p><span>New 6-core GPU</span> gives you enhanced graphics performance</p>
//           <p><span>17% increase in total system memory bandwidth</span>, the highest ever in iPhone, for outstanding performance</p>
//         </div>
//       </div>
//     </div>
//   );
// }

