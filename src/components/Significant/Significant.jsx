import React, { useState } from 'react'
import './Significant.css'
import img1 from '../../assets/mac__bu11q61rsagi_medium.jpg'
import img2 from '../../assets/watch__ig3zeahrudyu_medium.jpg'
import img3 from '../../assets/airpods__edpf1pmlr70i_medium.jpg'

export default function GamingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "iPhone and Mac",
      text: "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.",
      image: img1
    },
    {
      title: "iPhone and Apple Watch",
      text: "Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction.14 To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.",
      image: img2
    },
    {
      title: "iPhone and AirPods",
      text: "Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio, which automatically tailors the noise control to provide the best listening experience across different environments and interactions throughout the day.",
      image: img3
    }
  ];

  return (
    <div className='signContent'>
      <h1>Significant others.</h1>
      <div className='SignSection'>

        {/* Text side */}
        <div className='textCardsSign'>
          {sections.map((section, index) => (
            <div className={`cardSign ${activeIndex === index ? "active" : ""}`} key={index} >
              <div className='titicon' onClick={() => setActiveIndex(index)}>
                <h2>
                {section.title}
              </h2>
                {
                  activeIndex === index ?
                <i class="fa-solid fa-chevron-down"></i>  
                  :
                <i class="fa-solid fa-chevron-up"></i>
                }
              </div>
              
                <p className={activeIndex === index ? "show" : "hide"}>{section.text}</p>
              
            </div>
          ))}
        </div>

        {/* Image side */}
        <div className='ImgCardsSign'>
          {sections.map((section, index) => (
            <img
              key={index}
              src={section.image}
              alt="img"
              className={activeIndex === index ? "show" : "hide"}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
