import React, { useEffect, useState, useRef } from 'react';
import './HighlightsSection.css';
import vid1 from '../../assets/medium highlit1.mp4';
import vid2 from '../../assets/medium highlit3.mp4';
import vid4 from '../../assets/medium highlit2.mp4';
import img3 from '../../assets/thin__eqeewfn1mgsy_xlarge.jpg';
import img5 from '../../assets/battery__fv8w2lr5h1qy_xlarge.jpg';
import vid6 from '../../assets/medium (A18).mp4';

export default function HighlightsSection() {
  const sections = [
    { title: 'So fast. So fluid.Get a feel for the all-new Camera Control.', type: 'video', src: vid1 },
    { title: '4K 120 fps Dolby Vision.4 studio-quality mics.A Pro studio in your pocket.', type: 'video', src: vid4 },
    { title: 'Our thinnest borders yet — for even larger displays. Brilliant.', type: 'image', src: img3 },
    { title: 'All-new A18 Pro chip. Unrivaled performance. Unprecedented efficiency.', type: 'video', src: vid6 },
    { title: 'A huge leap in battery life. Game on.', type: 'image', src: img5 },
    { title: 'The first iPhone designed for Apple Intelligence. Personal, private, powerful.', type: 'video', src: vid2 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // مراقبة ظهور السيكشن على الشاشة
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsSectionVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // تأثير الأنيميشن
  useEffect(() => {
    setAnimate(false);
    const timeout1 = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout1);
  }, [currentIndex]);

  // تحريك السلايد تلقائيًا لما يكون البلاي شغال والسيكشن ظاهر
  useEffect(() => {
    if (isPlaying && isSectionVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sections.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, isSectionVisible, sections.length]);

  return (
    <div className="highlights-container" ref={sectionRef}>
      <div className="highlights-header">
        <h1>Get the highlights.</h1>
        <a href="#">
          Watch the film <i className="fa-regular fa-circle-play"></i>
        </a>
      </div>

      <div className="slides-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(${-currentIndex * 90}%)` }}
        >
          {sections.map((section, i) => (
            <div
              key={i}
              className="slide"
              onMouseEnter={() => setCurrentIndex(i)}
            >
              <p className={i === currentIndex ? 'animate-text' : ''}>
                {section.title}
              </p>
              {section.type === 'image' ? (
                <img src={section.src} alt={section.title} />
              ) : (
                <video
                  src={section.src}
                  muted
                  playsInline
                  ref={(el) => {
                    if (el) {
                      if (i === currentIndex && isSectionVisible) el.play();
                      else el.pause();
                    }
                  }}
                  style={{ width: '100%', height: '100%', borderRadius: '16px' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="moveH">
        <i
          className={isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'}
          onClick={() => setIsPlaying((prev) => !prev)}
          style={{ cursor: 'pointer' }}
        ></i>
        <div className="indicators">
          {sections.map((_, i) => (
            <span
              key={i}
              className={i === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
