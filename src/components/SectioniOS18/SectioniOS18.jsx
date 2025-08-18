import React, { useEffect, useState } from 'react'
import './SectioniOS18.css'
import imgbg from '../../assets/hero_ios18__gf6c1cf1m1yu_xlarge.jpg'
import imbgsmall from '../../assets/hero_ios18__gf6c1cf1m1yu_xsmall_2x.jpg'
import img1 from '../../assets/home_screen__dyeutbne73yq_xlarge.jpg'
import img2 from '../../assets/control_center__eymm132wx10m_xlarge.jpg'
import img3 from '../../assets/photos_app__e0nu5f1ce6ie_xlarge.jpg'
import img4 from '../../assets/expressive_text__fgzgi4x9ukii_xlarge.jpg'

export default function SectioniOS18() {
    const imgSections = [
        { image: img1, title: 'Personalize your Home Screen. Tint your icons with any color. Rearrange and resize apps and widgets. You can even lock or hide apps to protect sensitive information — it’s your call.' },
        { image: img2, title: 'Choose your controls. Swap out your Lock Screen controls for ones you love to use more often. Or you can assign a control to the Action button.'},
        { image: img3, title: 'Find your favorite shots faster. In the redesigned Photos app, your Collections are automatically organized by topic, like People & Pets.' },
        { image: img4, title: 'Get expressive with text. Add playful, animated effects to any word, phrase, or emoji in iMessage — many of which are automatically suggested as you type.' }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    
      function scrollLeft() {
        setCurrentIndex(prev => (prev - 1 + imgSections.length) % imgSections.length);
      }
    
      function scrollRight() {
        setCurrentIndex(prev => (prev + 1) % imgSections.length);
      }

      const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 734);
      useEffect(() => {
          const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 734);
          };
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
    
  return (
    <div className='SectioniOS18'>
      <div className='headerios'>
        <h1 className='secoundtitle'>iOS 18.</h1>
        <h1 className='titleios'>Customize. Stylize. Mesmerize.</h1>
      </div>
      
      <img src= {isSmallScreen ?  imbgsmall : imgbg} alt="img" className='imgBGios' />

      <div className='allsB'>
        <div className='Beautyslids'>
          <div className="slidesWrapper" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
            {imgSections.map((section, i) => (
              <div className='slidee2' key={i}>
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
      <a href="#">Learn more about iOS 18</a>
      </div>
    </div>
  )
}
