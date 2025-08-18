import React, { useRef, useState } from 'react'
import './StellarSextion.css'
import vid from '../../assets/medium text5.mp4'
import imgframe from '../../assets/hero_video_hw__cwpjkj2nmsa6_xlarge 4.png'
export default function StellarSection() {
    const sectionRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("iPhone 12 Pro");
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (phone) => {
        setSelected(phone);
        setIsOpen(false);
    };

  const phoneData = {
    "iPhone 12 Pro": [
      { hours: "10 more hours", text: "video playback on iPhone 16 Pro" },
      { hours: "16 more hours", text: "video playback on iPhone 16 Pro Max" },
    ],
    "iPhone 12 Pro Max": [
      { hours: "7 more hours", text: "video playback on iPhone 16 Pro" },
      { hours: "13 more hours", text: "video playback on iPhone 16 Pro Max" },
    ],
    "iPhone 13": [
      { hours: "5 more hours", text: "video playback on iPhone 16 Pro" },
      { hours: "11 more hours", text: "video playback on iPhone 16 Pro Max" },
    ],
     "iPhone 13 Pro Max": [
      { hours: "1 more hours", text: "video playback on iPhone 16 Pro" },
      { hours: "5 more hours", text: "video playback on iPhone 16 Pro Max" },
    ],
    "iPhone 14": [
      { hours: "4 more hours", text: "video playback on iPhone 16 Pro" },
      { hours: "10 more hours", text: "video playback on iPhone 16 Pro Max" },
    ],
     "iPhone 14 Pro Max": [
      { hours: "2 more hours", text: "video playback on iPhone 16 Pro" },
      { hours: "4 more hours", text: "video playback on iPhone 16 Pro Max" },
    ],
    "iPhone 15": [
      { hours: "4 more hours", text: "video playback on iPhone 16 Pro" },
      { hours: "10 more hours", text: "video playback on iPhone 16 Pro Max" },
    ],
     "iPhone 15 Pro Max": [
      { hours: "2 more hours", text: "video playback on iPhone 16 Pro" },
      { hours: "4 more hours", text: "video playback on iPhone 16 Pro Max" },
    ],
  };

  return (
    <div className='StellarSection' ref={sectionRef}>
      <h1>A <span className='secoundtitle'>huge leap</span> in battery life. <span className='secoundtitle'>Stellar</span></h1>
      <div className='vidStellarSmal'>
            <video src={vid} muted playsInline autoPlay preload="auto" ></video>
            <img src={imgframe} alt="frame-img" />
      </div>
        <div className='textStellar'>
            <div className='textStell1'>
                <p>iPhone 16 Pro gives you longer battery life — and iPhone 16 Pro Max delivers <span>the best battery life ever on an iPhone. </span>How? An optimized internal design fits larger batteries, which work together with the A18 Pro chip to deliver incredibly power-efficient performance. Even with so many new capabilities.</p>
                <p>Snap on a new MagSafe charger for <span>even faster wireless charging</span>7 — up to 25W with a 30W power adapter or higher, enabling up to 50% charge in around 30 minutes.8</p>
            </div>
            <div className='textStell2'>
                <p>Up to <span className='h3t'>33 hours</span> video playback on iPhone 16 Pro Max9</p>
                <p>Up to <span className='h3t'>27 hours</span> video playback on iPhone 16 Pro9</p>
            </div>
        </div>
        <div className='vidStellar'>
            <video src={vid} muted playsInline autoPlay preload="auto" ></video>
            <img src={imgframe} alt="frame-img" />
        </div>
        <div className="compareContainer">
      <div className="compareHeader">
        <p>Compare with</p>
        <div className="customDropdown">
          <div className="selected" onClick={toggleDropdown}>
            {selected} <span className="arrow">{isOpen ? "▲" : "▼"}</span>
          </div>
          {isOpen && (
            <ul className="options">
              {Object.keys(phoneData).map((phone) => (
                <li key={phone} onClick={() => handleSelect(phone)}>
                  {phone}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="compareText">
        <div className='compareCard'>
          <p>Up to</p>
          <h3>{phoneData[selected][0].hours}</h3>
          <p>video playback on iPhone 16 Pro</p>
        </div>
        <div className='compareCard'>
          <p>Up to</p>
          <h3>{phoneData[selected][1].hours}</h3>
          <p>video playback on iPhone 16 Pro Max</p>
        </div>
      </div>
        </div>
    </div>
  )
}
