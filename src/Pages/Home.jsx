import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import HighlightsSection from '../components/HighlightsSection/HighlightsSection'
import CloserLookSection from '../components/CloserLookSection/CloserLookSection'
import StrengthBeauty from '../components/StrengthBeauty/StrengthBeauty'
import CameraControl from '../components/CameraControl/CameraControl'
import Cinemasterful from '../components/Cinemasterful/Cinemasterful'
import AudioMix from '../components/AudioMix/AudioMix'
import WideCamera from '../components/WideCamera/WideCamera'
import PhotographicStyle from '../components/PhotographicStyle/PhotographicStyle'
import Phone3 from '../components/Phone3/Phone3'
import A18ProSection from '../components/A18ProSection/A18ProSection'
import Qualityvideo from '../components/Cinemasterful/Qualityvideo'
import Shape3D from '../components/shape3D/Shape3D'
import Significant from '../components/Significant/Significant'

import SSS from '../components/SSS'
import UpgradeSection from '../components/UpgradeSection/UpgradeSection'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <CloserLookSection />
      <StrengthBeauty />
      <CameraControl />
      <Cinemasterful />
      <Qualityvideo />
      {/* <Phone3 /> */}
      <AudioMix />
      <WideCamera />
      {/* <PhotographicStyle /> */}
      <SSS />
      <A18ProSection />
      <Significant />
      <UpgradeSection />
      <Shape3D />
      <Footer/>
    </div>
  )
}
