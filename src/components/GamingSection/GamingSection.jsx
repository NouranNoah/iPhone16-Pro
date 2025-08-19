import React, { useRef, useEffect, useState } from 'react';
import './GamingSection.css';
import imgCard from '../../assets/gaming__efzeg2xv1ka6_xlarge.jpg';


export default function GamingSection() {
  
  return (
    <div className='GamingSection'>
      <p className='pSign'>DEATH STRANDING DIRECTOR’S CUT</p>
      <img src={imgCard} alt="img" />

      <h1 className='firstTitle'><p>Gaming.</p>In a whole new light.</h1>
      <div>
        <p>With up to two times faster hardware-accelerated ray tracing, A18 Pro <span>makes games look and feel beautifully lifelike</span> — with more fluid graphics and realistic lighting.</p>
        <p>And with Game Mode in iOS 18, you’ll get better sustained frame rates for continuous play and improved responsiveness if you’re using wireless controllers and AirPods.</p>
      </div>
      <h2><span>Up to 2x faster hardware-accelerated ray tracing</span> than A17 Pro</h2>

     
    </div>
  );
}
