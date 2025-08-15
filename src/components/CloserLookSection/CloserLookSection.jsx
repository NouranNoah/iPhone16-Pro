// import React, { useState, useEffect } from 'react';
// import './CloserLookSection.css';
// import img1 from '../../assets/all_colors__fdpduog7urm2_xlarge.jpg';
// import img2 from '../../assets/black_titanium__ezezv5esulua_xlarge.jpg';
// import img3 from '../../assets/white_titanium__b0s9tw63hs4i_xlarge.jpg';
// import img4 from '../../assets/natural_titanium__22ovjg0i0huy_xlarge.jpg';
// import img5 from '../../assets/desert_titanium__gcg1i94xakuq_xlarge.jpg';

// export default function CloserLookSection() {
//   const imgSections = [
//     { title: '6.3” iPhone 16 Pro2 in four colors', image: img1 },
//     { title: '6.9” iPhone 16 Pro Max2 & 6.3” iPhone 16 Pro2 in Black Titanium', image: img2 },
//     { title: '6.9” iPhone 16 Pro Max2 & 6.3” iPhone 16 Pro2 in White Titanium', image: img3 },
//     { title: '6.9” iPhone 16 Pro Max2 & 6.3” iPhone 16 Pro2 in Natural Titanium', image: img4 },
//     { title: '6.9” iPhone 16 Pro Max2 & 6.3” iPhone 16 Pro2 in Desert Titanium', image: img5 },
//   ];
//   const pointColors = [
//     'linear-gradient(45deg, #000000bd, #5d3b1d, silver,#8b846cbd)',
//     '#000000bd',    
//     'white', 
//     '#b6b09abd', 
//     '#9f795cff'      
//   ];


//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setAnimate(true);
//     const timer = setTimeout(() => setAnimate(false), 900);
//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   return (
//     <div className="CloserLookSectionContent">
//       <h1>Take a closer look.</h1>

//       <div className="colorsSection">
//         <div className="slideColor">
//           <img
//             src={imgSections[currentIndex].image}
//             alt={imgSections[currentIndex].title}
//             className={animate ? 'animate-show' : ''}
//           />
//         </div>
//       </div>

//       <div className="allcolor">
//         <p className={animate ? 'animate-show' : ''}>
//             {imgSections[currentIndex].title}
//           </p>
//         <div className='pointsSection'>
//             {imgSections.map((_, i) => (
//             <span
//             key={i}
//             className={i === currentIndex ? 'activeC' : ''}
//             onClick={() => setCurrentIndex(i)}
//             style={{ background: pointColors[i] }}
//             />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import './CloserLookSection.css';
import img1 from '../../assets/all_colors__fdpduog7urm2_xlarge.jpg';
import img2 from '../../assets/black_titanium__ezezv5esulua_xlarge.jpg';
import img3 from '../../assets/white_titanium__b0s9tw63hs4i_xlarge.jpg';
import img4 from '../../assets/natural_titanium__22ovjg0i0huy_xlarge.jpg';
import img5 from '../../assets/desert_titanium__gcg1i94xakuq_xlarge.jpg';

export default function CloserLookSection() {
  const imgSections = [
    { title: '6.3” iPhone 16 Pro2 in four colors', image: img1 },
    { title: '6.9” iPhone 16 Pro Max2 & 6.3” iPhone 16 Pro2 in Black Titanium', image: img2 },
    { title: '6.9” iPhone 16 Pro Max2 & 6.3” iPhone 16 Pro2 in White Titanium', image: img3 },
    { title: '6.9” iPhone 16 Pro Max2 & 6.3” iPhone 16 Pro2 in Natural Titanium', image: img4 },
    { title: '6.9” iPhone 16 Pro Max2 & 6.3” iPhone 16 Pro2 in Desert Titanium', image: img5 },
  ];

  const pointColors = [
    'linear-gradient(45deg, #000000bd, #5d3b1d, silver,#8b846cbd)',
    '#000000bd',
    'white',
    '#b6b09abd',
    '#9f795cff'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 900);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  
  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    
    const rotateX = ((y - centerY) / centerY) * 15; 
    const rotateY = ((x - centerX) / centerX) * 15;

    imgRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div className="CloserLookSectionContent">
      <h1>Take a closer look.</h1>

      <div className="colorsSection">
        <div
          className="slideColor"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            ref={imgRef}
            src={imgSections[currentIndex].image}
            alt={imgSections[currentIndex].title}
            className={animate ? 'animate-show' : ''}
          />
        </div>
      </div>

      <div className="allcolor">
        <p className={animate ? 'animate-show' : ''}>
          {imgSections[currentIndex].title}
        </p>
        <div className="pointsSection">
          {imgSections.map((_, i) => (
            <span
              key={i}
              className={i === currentIndex ? 'activeC' : ''}
              onClick={() => setCurrentIndex(i)}
              style={{ background: pointColors[i] }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
