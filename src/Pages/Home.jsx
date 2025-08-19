import React, { useEffect, useState } from 'react'
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
import Space from '../components/space/Space'
import Cinemasterful2 from '../components/Cinemasterful2/Cinemasterful2'
import TextCine from '../components/Cinemasterful2/TextCine'
import StellarSection from '../components/StellarSEction/StellarSection'
import SectioniOS18 from '../components/SectioniOS18/SectioniOS18'
import LockSection from '../components/LockSection/LockSection'
import GamingSection from '../components/GamingSection/GamingSection'

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 734)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 734)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <CloserLookSection />
      <StrengthBeauty />
      <CameraControl />
      <Space />
      {/* <Cinemasterful /> */}
      <Qualityvideo />
      {/* <Phone3 /> */}
      <AudioMix />
      <Cinemasterful2 />
      <TextCine />
      <WideCamera />
      <SSS />
      <LockSection />
      
      <A18ProSection />
      <GamingSection />
      {/* <Significant /> */}
      {/* <UpgradeSection /> */}
      <StellarSection />
      <SectioniOS18 />
      <Shape3D />
      <Footer/>
      {/* <PhotographicStyle /> */}
    </div>
  )
}
