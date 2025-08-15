import React, { useRef } from 'react';
import './A18ProSection.css';
import vidBG from '../../assets/medium (A18).mp4';
export default function A18ProSection() {
  const sectionRef = useRef(null);

 
  return (
    <div className='A18ProSection' ref={sectionRef}>
      <div className='videoContainer'>
        <video src={vidBG} muted playsInline autoPlay preload="auto" />
      </div>
      <h1>
        <p>A18 Pro.</p>A colossally capable chip.
      </h1>
      <p>
        A phenomenally powerful chip that brings <span>exceptional speed and efficiency</span> to iPhone 16 Pro. 
        It also drives advanced video and photo features like Camera Control — and delivers outstanding graphics performance for AAA gaming.
      </p>
      <div className='specs'>
        <div>
          <p><span>New 16-core Neural Engine </span>makes on-device intelligence faster and more efficient</p>
          <p><span>New 6-core CPU</span>, the fastest in a smartphone, runs complex workloads with less power</p>
        </div>
        <div>
          <p><span>New 6-core GPU</span> gives you enhanced graphics performance</p>
          <p><span>17% increase in total system memory bandwidth</span>, the highest ever in iPhone, for outstanding performance</p>
        </div>
      </div>
    </div>
  );
}
// ///////////////////////////////////////////


