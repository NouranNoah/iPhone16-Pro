import React from 'react'
import './UpgradeSection.css'
import dynamicIslandImg from '../../assets/dynamic_island__ecff9fvmu4wi_large.jpg'
import ceramicShieldImg from '../../assets/thim.jpg'
import batteryimg from '../../assets/battery__fv8w2lr5h1qy_large.jpg'
import appleimg from '../../assets/apple_intelligence__cy7u2ghay5ci_large.png'
import imgb from '../../assets/camera_control__emvci128apme_large.jpg'

export default function UpgradeSection() {
  return (
    <div className='upcontent'>
      <div className="upgrade-header">
        <h1>There’s never been a better time to upgrade.</h1>
        <p>A few ways iPhone 16 gives you more.</p>
      </div>

      <div className="upgrade-section">
        
        {/* Battery */}
        <div className="upgrade-card text-first">
          <p>Up to <div>16 more <p className='p-in'>hours <img src={batteryimg} alt="Battery" /></p></div></p>
          <p>video playback on iPhone 16 Pro Max</p>
        </div>

        {/* CPU */}
        <div className="upgrade-card text-first">
          <p>Up to <p className='p-in'>60% faster</p></p>
          <p>6-core CPU</p>
        </div>

        {/* Camera Control */}
        <div className="upgrade-card img-first">
          <img src={imgb} alt="Camera" />
          <h5>Camera Control</h5>
          <p>Take the perfect photo in record time</p>
        </div>

        {/* Dynamic Island */}
        <div className="upgrade-card text-first">
          <h4>Dynamic Island</h4>
          <p>Bubbles up alerts and Live Activities</p>
          <img src={dynamicIslandImg} alt="Dynamic Island" />
        </div>

        {/* Ceramic Shield */}
        <div className="upgrade-card img-first">
          <h4>Latest-generation <br /> <span>Ceramic Shield</span></h4>
          <img src={ceramicShieldImg} alt="Ceramic Shield" />
        </div>

        {/* Apple Intelligence */}
        <div className="upgrade-card img-first">
          <img src={appleimg} alt="Apple Intelligence" />
          <h3>Built for <br /> <span>Apple Intelligence</span></h3>
        </div>
      </div>
    </div>
  )
}
