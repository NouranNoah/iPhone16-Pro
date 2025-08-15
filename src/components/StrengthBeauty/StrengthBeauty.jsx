import React, { useState, useEffect, useRef } from 'react';
import './StrengthBeauty.css';
import vidBG from '../../assets/medium 2phones.mp4';
import vidBG2 from '../../assets/2phonexsmall_2x.mp4';
import img1 from '../../assets/display__f5509jfp9nyq_xlarge.jpg';
import img2 from '../../assets/thin__eqeewfn1mgsy_xlarge_1.jpg';
import img3 from '../../assets/display__f5509jfp9nyq_xlarge.png';
import img4 from '../../assets/color__eaawe4bmivki_xlarge.jpg';

export default function StrengthBeauty() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [videoSrc, setVideoSrc] = useState(vidBG);
  const [isMobile, setIsMobile] = useState(false);

  // السلايدر
  const imgSections = [
    { image: img1, title: 'iPhone 16 Pro Max has our largest iPhone display ever' },
    { image: img2, title: 'The thinnest borders on any Apple product' },
    { image: img3, title: 'Premium Grade 5 titanium is exceptionally durable' },
    { image: img4, title: 'Four striking colors, from Black Titanium to new Desert Titanium' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  function scrollLeft() {
    setCurrentIndex(prev => (prev - 1 + imgSections.length) % imgSections.length);
  }

  function scrollRight() {
    setCurrentIndex(prev => (prev + 1) % imgSections.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % imgSections.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // تغيير الفيديو حسب حجم الشاشة
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setVideoSrc(vidBG2);
        setIsMobile(true);
      } else {
        setVideoSrc(vidBG);
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='StrengthBeautyContent' ref={sectionRef}>
      <h1 className='firstTitle'>Strength. Beauty.</h1>
      <h1 className='secoundtitle'>Titanium.</h1>

      <div className='videoReveal'>
        <div className='videoContainer'>
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            autoPlay
            preload="auto"
          />
        </div>
      </div>

      <div className='textBeauty'>
        <p>
          iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted finish.
          Titanium has one of the highest strength-to-weight ratios of any metal, making these models{' '}
          <span>incredibly strong and impressively light</span>. iPhone 16 Pro comes in four stunning
          colors — including new Desert Titanium.
        </p>
        <p>
          Internal design improvements — including a 100 percent recycled aluminum thermal
          substructure and back glass optimizations that further dissipate heat — enable up to 20
          percent <span>better sustained performance </span>than iPhone 15 Pro. So you can do all
          the things you love — like high-intensity gaming — for longer.
        </p>
      </div>

      {/* السلايدر */}
      <div className='allsB'>
        <div className='Beautyslids'>
          <div className="slidesWrapper" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
            {imgSections.map((section, i) => (
              <div className='slidee' key={i}>
                <img src={section.image} alt={section.title} />
                <p>{section.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='slideArrows'>
          <i className="fa-solid fa-angle-left" onClick={scrollLeft}></i>
          <i className="fa-solid fa-angle-right" onClick={scrollRight}></i>
        </div>
      </div>

      <div className='textBeauty'>
        <p>
          New display technology allows us to route display data under active pixels with no distortion, resulting in thinner borders for larger 6.3-inch and 6.9-inch <span>Super Retina XDR displays </span> that feel great in the hand.
        </p>
        <p>
          iPhone 16 Pro is splash, water, and dust resistant. It also has our latest-generation Ceramic Shield material that's <span>two times tougher than any smartphone glass.</span> Talk about durable.
        </p>
      </div>
    </div>
  );
}
