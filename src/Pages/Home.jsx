import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import HighlightsSection from '../components/HighlightsSection/HighlightsSection'
import CloserLookSection from '../components/CloserLookSection/CloserLookSection'
import StrengthBeauty from '../components/StrengthBeauty/StrengthBeauty'
import CameraControl from '../components/CameraControl/CameraControl'
import Cinemasterful from '../components/Cinemasterful/Cinemasterful'
import Qualityvideo from '../components/Cinemasterful/qualityvideo'
import AudioMix from '../components/AudioMix/AudioMix'
import WideCamera from '../components/WideCamera/WideCamera'
import PhotographicStyle from '../components/PhotographicStyle/PhotographicStyle'
import Phone3 from '../components/Phone3/Phone3'
import A18ProSection from '../components/A18ProSection/A18ProSection'

// import SSS from '../components/SSS'

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
      <PhotographicStyle />
      <A18ProSection />
      {/* <SSS /> */}
      {/* <HighlightsSection /> */}
    </div>
  )
}
