// // Shape3D.jsx
// import React from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stage, useGLTF, ContactShadows } from '@react-three/drei'
// import './Shape3D.css'

// function MyModel() {
//   const { scene } = useGLTF('/Models/dnaAnimated.glb')

//   // تغيير اللون والخامة لكل أجزاء الموديل
//   scene.traverse((child) => {
//     if (child.isMesh && child.material) {
//       child.material.color.set('#4A90E2') // أزرق
//       child.material.metalness = 0.5       // لمعان
//       child.material.roughness = 0.2       // سطح ناعم
//     }
//   })

//   return <primitive object={scene} scale={1} />
// }

// export default function Shape3D() {
//   return (
//     <div className='shapeSection'>
//       <div className='shape3d'>
//         <Canvas shadows camera={{ position: [0, 1, 3], fov: 50 }}>
//           {/* إضاءة أساسية */}
//           <ambientLight intensity={0.6} />
//           <directionalLight
//             position={[5, 5, 5]}
//             intensity={1.5}
//             castShadow
//           />

//           {/* موديل مع بيئة وإضاءة احترافية */}
//           <Stage environment="city" intensity={0.8} adjustCamera={false}>
//             <MyModel />
//           </Stage>

//           {/* ظل على الأرض */}
//           <ContactShadows
//             position={[0, -1, 0]}
//             opacity={0.5}
//             scale={10}
//             blur={2}
//             far={4}
//           />

//           {/* التحكم بالماوس مع دوران تلقائي */}
//           <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={2} />
//         </Canvas>
//       </div>

//       <div className='textShape3d'>
//         <h2>DNA Structure Visualization</h2>
//         <p>
//           Explore the elegance of the DNA double helix in stunning 3D.
//           Rotate, zoom, and discover the microscopic blueprint of life,
//           where science and design meet in harmony.
//         </p>
//       </div>
//     </div>
//   )
// }

// Shape3D_AR.jsx
import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import './Shape3D.css'

function MyModel() {
  const { scene } = useGLTF('/Models/dnaAnimated.glb')

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set('#4A90E2')
      child.material.metalness = 0.5
      child.material.roughness = 0.2
    }
  })

  return <primitive object={scene} scale={0.6} /> 
}


function CameraBackground({ videoRef }) {
  const { scene } = useThree()
  useEffect(() => {
    if (videoRef.current) {
      const texture = new THREE.VideoTexture(videoRef.current)
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      texture.format = THREE.RGBFormat
      scene.background = texture // خلفية ثابتة
    }
  }, [videoRef, scene])
  return null
}

export default function Shape3D_AR() {
  const videoRef = useRef(null)
  const [cameraOn, setCameraOn] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const enableCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setCameraOn(true)
      }
    } catch (err) {
      console.error('Camera access denied:', err)
    }
  }

  const disableCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      let tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach((track) => track.stop())
    }
    setCameraOn(false)
  }

  return (
    <div
      className='shapeSection'
      style={{ display: isMobile ? 'block' : 'flex' }}
    >
      {/* زر الكاميرا أو الإغلاق */}
      {isMobile && !cameraOn && (
        <button onClick={enableCamera} className='btnCam'>
          Enable Camera
        </button>
      )}
      {isMobile && cameraOn && (
        <button onClick={disableCamera} className='btnCam close'>
          Close Camera
        </button>
      )}

      {/* فيديو مخفي */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ display: 'none' }}
      />

      <div
        className='shape3d'
        style={{
          backgroundColor: isMobile && cameraOn ? '' : '#32323275',
        }}
      >
        <Canvas camera={{ position: [0, 0.5, 5], fov: 50 }}>
          {isMobile && cameraOn && <CameraBackground videoRef={videoRef} />}
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Stage environment={null} adjustCamera={false}>
            <MyModel />
          </Stage>
          <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={2} />
        </Canvas>
      </div>

      {!isMobile && (
        <div className='textShape3d'>
          <h2>DNA Structure Visualization</h2>
          <p>
            Explore the elegance of the DNA double helix in stunning 3D.
            Rotate, zoom, and discover the microscopic blueprint of life,
            where science and design meet in harmony.
          </p>
        </div>
      )}
    </div>
  )
}
