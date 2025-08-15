import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import vid1 from '../../assets/mediumscrol1.mp4';
import vid2 from '../../assets/mediumscrol2.mp4';
import vid3 from '../../assets/mediumscrol3.mp4';
import vid4 from '../../assets/mediumscrol4.mp4';

import '../CameraControl/Slidemoving.css';

export default function SlidesmovingHorizontalAuto() {
  const videoSections = [
    { vid: vid1, title:'Click to launch the Camera app. Click again to instantly take a photo.' },
    { vid: vid2, title:'Click and hold to start recording video.' },
    { vid: vid3, title:'A light press opens controls like zoom.' },
    { vid: vid4, title:'With a double light press, you can select another camera setting. Then slide to adjust that setting.' }
  ];

  const slidesRef = useRef([]);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    slidesRef.current.forEach(slide => {
      const video = slide.querySelector('video');
      const overlay = slide.querySelector('.overlay');

      gsap.set(overlay, { opacity: 0 });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // تشغيل الفيديو أول ما يظهر
            if(video) {
              video.play().catch(() => {});
            }
            gsap.to(overlay, { opacity: 1, duration: 1.5, ease: "power2.inOut" });
          } else {
            // إيقاف الفيديو لما يخرج من الشاشة
            if(video) {
              video.pause();
              video.currentTime = 0;
            }
            gsap.to(overlay, { opacity: 0, duration: 1, ease: "power2.inOut" });
          }
        },
        { threshold: 0.8 } // يتحرك الفيديو لما يكون 80% ظاهر
      );

      observer.observe(slide);
    });
  }, []);

  function scrollLeft() {
    if(containerRef.current){
      containerRef.current.scrollBy({ left: -containerRef.current.clientWidth * 0.7, behavior: 'smooth' });
    }
  }

  function scrollRight() {
    if(containerRef.current){
      containerRef.current.scrollBy({ left: containerRef.current.clientWidth * 0.7, behavior: 'smooth' });
    }
  }

  return (
    <div className='slidemove'>
      <div className="Beautyslids" ref={containerRef}>
        {videoSections.map((section, i) => (
          <div className="slidee2" key={i} ref={el => slidesRef.current[i] = el}>
            <video 
              src={section.vid} 
              className="base" 
              muted 
              playsInline 
              preload="auto"
            />
            <div className="overlay"></div>
            <p>{section.title}</p>
          </div>
        ))}
      </div>

      <div className='slideArrows'>
        <i className="fa-solid fa-angle-left" onClick={scrollLeft}></i>
        <i className="fa-solid fa-angle-right" onClick={scrollRight}></i>
      </div>
    </div>
  );
}
