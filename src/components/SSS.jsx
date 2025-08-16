import React, { useState, useEffect, useRef } from 'react'
import img1 from "../assets/hero_style1__ejjuw3sw3t0m_medium.jpg";
import img2 from "../assets/hero_style2__gbh1d5shzmie_medium.jpg";
import img3 from "../assets/hero_style3__ebrovo7velkm_medium.jpg";
import './sss.css'

export default function SSS() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInImageMode, setIsInImageMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const images = [img1, img2, img3];

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;

    const handleWheel = (e) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollY = window.scrollY;

      if (!isInImageMode && scrollY >= sectionTop && scrollY < sectionBottom && e.deltaY > 0) {
        setIsInImageMode(true);
        setCurrentImageIndex(0);
        e.preventDefault();
        window.scrollTo({ top: sectionTop, behavior: "instant" });
        return;
      }

      if (isInImageMode) {
        e.preventDefault();
        if (isAnimating) return;
        setIsAnimating(true);

        if (e.deltaY > 0) {
          if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(prev => prev + 1);
          } else {
            setIsInImageMode(false);
          }
        } else {
          if (currentImageIndex > 0) {
            setCurrentImageIndex(prev => prev - 1);
          } else {
            setIsInImageMode(false);
            window.scrollTo({ top: sectionTop - 1, behavior: "instant" });
          }
        }

        setTimeout(() => setIsAnimating(false), 1000);
      }
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
      touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const deltaX = touchStartX.current - touchEndX.current;
      const deltaY = touchStartY.current - touchEndY.current;

      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollY = window.scrollY;

      if (!isInImageMode && scrollY >= sectionTop && scrollY < sectionBottom) {
        setIsInImageMode(true);
        setCurrentImageIndex(0);
        window.scrollTo({ top: sectionTop, behavior: "instant" });
        return;
      }

      if (isInImageMode && isHorizontal && !isAnimating) {
        setIsAnimating(true);

        if (deltaX > 50) {
          // Swipe left → next
          if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(prev => prev + 1);
          } else {
            setIsInImageMode(false);
          }
        } else if (deltaX < -50) {
          // Swipe right → prev
          if (currentImageIndex > 0) {
            setCurrentImageIndex(prev => prev - 1);
          } else {
            setIsInImageMode(false);
            window.scrollTo({ top: sectionTop - 1, behavior: "instant" });
          }
        }

        setTimeout(() => setIsAnimating(false), 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    section.addEventListener('touchstart', handleTouchStart, { passive: true });
    section.addEventListener('touchmove', handleTouchMove, { passive: true });
    section.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      section.removeEventListener('touchstart', handleTouchStart);
      section.removeEventListener('touchmove', handleTouchMove);
      section.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentImageIndex, isInImageMode, isAnimating, images.length]);

  return (
    <div className='photographic-section'>
        <h1>hoose your <p>Photographic Style.</p> Change it up. Change it back.</h1>
      <div className="sss-container" ref={sectionRef}>
        <div
          className="images-wrapper"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

        <p className='ppp'>Our latest generation of Photographic Styles gives you greater creative flexibility than ever before, so you can <span>make every photo even more you.</span> And thanks to advances in our image pipeline, you can now reverse any style, anytime.</p>
    </div>
  );
}
