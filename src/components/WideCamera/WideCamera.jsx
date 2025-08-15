import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/macro__n1qy7scdy6qi_medium.jpg'
import img2 from '../../assets/13mm__dj995tp6l066_medium.jpg'
import img3 from '../../assets/24mm__evvsnq405iye_medium.jpg'
import img4 from '../../assets/28mm__du3mwh4nbeye_medium.jpg'
import img5 from '../../assets/35mm__c0a8s9ucto02_medium.jpg'
import img6 from '../../assets/48mm__dvculcs2aaie_medium.jpg'
import img7 from '../../assets/120mm__9cdxnei9bnmy_medium.jpg'
import vid from '../../assets/medium (cam).mp4'
import './WideCamera.css'

export default function WideCamera() {
  const imgSetionNum = [
    { img: img1, title: 'Macro', text: '0.5x Macro' },
    { img: img2, title: '13 mm', text: '0.5x Ultra Wide' },
    { img: img3, title: '24 mm', text: '1x Fusion 24 mm' },
    { img: img4, title: '28 mm', text: '1.2x Fusion 28 mm' },
    { img: img5, title: '35 mm', text: '1.5x Fusion 35 mm' },
    { img: img6, title: '48 mm', text: '2x Telephoto' },
    { img: img7, title: '120 mm', text: '5x Telephoto' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

// ///////////////////////////////////////////////////////////////////////////////////////
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <div>
    <div className="wide-camera">
      <div className="main-image">
        <img src={imgSetionNum[currentIndex].img} alt={imgSetionNum[currentIndex].title} />
      </div>
      <div className="thumbnails">
        {imgSetionNum.map((item, index) => (
          <div
            key={index}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <p>{imgSetionNum[currentIndex].text}</p>
    </div>

    <div className="camera-section" ref={sectionRef}>
      <div className="text-side">
        <p>
          More zoom? Boom. Now you can shoot in 120 mm with the 5x Telephoto camera on both Pro models and get 
          <strong> sharper close-ups from farther away.</strong> 
          With multiple framing options, it’s like having seven pro lenses in your pocket, everywhere you go.
        </p>
      </div>
      
      <video
        ref={videoRef}
        src={vid}
        muted
        playsInline
        autoPlay
        preload="auto"
        className="camera-video">
        </video>
    </div>
    </div>
  );
}
