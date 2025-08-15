import React, { useRef } from 'react';
import './CameraControl.css';
import vidBG from '../../assets/medium control.mp4';
import vidBG2 from '../../assets/2phonexsmall_2x.mp4'
import imgCard from '../../assets/visual_intelligence__gg7juvgo3amq_large.jpg';
import Slidesmoving from './Slidesmoving';

export default function CameraControl() {
  const sectionRef = useRef(null);

  return (
    <div className='CameraControlContent' ref={sectionRef}>
      <h1 className='firstTitle'>Take total</h1>
      <h1 className='secoundtitle'>Camera Control.</h1>

      <div className='videoContainer'>
        <video src={vidBG} muted playsInline autoPlay preload="auto" />
      </div>

      {/* النص */}
      <div className='textBeauty'>
        <p>
          Now you can take the perfect photo or video in record time. Camera Control gives you an{' '}
          <span>easier way to quickly access camera tools.</span> Simply slide your finger to adjust camera functions like exposure or depth of field, and toggle through each lens or use digital zoom to frame your shot — just how you like it.
        </p>
        <p>
          Later this year, Camera Control will introduce a two-stage shutter that lets you{' '}
          <span>automatically lock focus and exposure</span> with a light press — so you can reframe your shot without losing focus on your subject.
        </p>
      </div>

      <Slidesmoving />
      
      {/* الكارد */}
      <div className='cardWorld'>
        <div className='allCard'>
          <div className='cardText'>
            <p>Visual intelligence</p>
            <h2>See the world through an entirely new lens.</h2>
            <p>
              Use <span>visual intelligence</span> through Camera Control to instantly learn about things you see. Just{' '}
              <span>point your iPhone 16 Pro to discover more</span> or interact with something in front of you. Search for where to buy a new item you spotted, identify plants and animals, and more.
            </p>
          </div>
          <div className='cardIg'>
            <img src={imgCard} alt="imgCard" />
          </div>
        </div>
      </div>
    </div>
  );
}
