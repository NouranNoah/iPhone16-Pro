import React from 'react'
import imgBG from '../../assets/audio__focwd6fsy1e2_xlarge.jpg'
import './AudioMix.css'
export default function AudioMix() {
  return (
    <div className='AudioMixSection'>
        <h1>Audio Mix</h1>
        <h1>Make your voice heard.</h1>
        <p>Powered by advanced intelligence and Spatial Audio capture, Audio Mix lets you <span>adjust the way voices sound in your videos</span> using three different voice options. Want to decrease background sound? Or just focus on the voices that are in frame? Simply select the mix and adjust intensity to get the sound you want after video capture.</p>
        <img src={imgBG} alt="img Audio" />
        <div className='audioCards'>
            <div>
                <h3>In-frame</h3>
                <p>Only captures the voices of the people on camera, even if people off-camera are talking during the recording.</p>
            </div>
            <div>
                <h3>Studio</h3>
                <p>Makes voices sound like you’re recording in a professional studio equipped with sound-dampening walls. Great for vloggers or podcasters because the recording will sound like the mic is close to the subject’s mouth, even if it’s a few feet away.</p>
            </div>
            <div>
                <h3>Cinematic</h3>
                <p>Captures all of the voices around you and consolidates them toward the front of the screen — just like sound is formatted for the movies.</p>
            </div>
        </div>
    </div>
  )
}
