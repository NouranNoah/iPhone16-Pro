import React, { useEffect, useRef, useState } from 'react'
import './Phone3.css'
import img1 from '../../assets/tone__cjmevyop7r7m_medium.jpg'
import img2 from '../../assets/tone2.jpg'
import img3 from '../../assets/tone3.jpg'

export default function Phone3() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [hasCompleted, setHasCompleted] = useState(false);
    const [isGoingUp, setIsGoingUp] = useState(false);
    const sectionRef = useRef(null);
    const isScrollingRef = useRef(false);

    const textp = [
        {
            title: 'Lock in your look.',
            text: 'We\'ve created new styles that let you dial in your exact desired look with more advanced skin-tone rendering and set it across your photos.'
        },
        {
            title: 'Align with your aesthetic.',
            text: 'Our improved image pipeline also enables more creative styles, which allow you to customize the different moods of a photo through color.'
        },
        {
            title: 'Make the most of your megapixels.',
            text: 'Personalize every style even more with the new control pad, which makes it easy to adjust tone and color simultaneously. You can also use the slider to adjust the intensity of the specific colors, instead of applying a one-size-fits-all approach.'
        }
    ];

    const images = [img1, img2, img3];

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // تحقق من أن السيكشن في نطاق الرؤية
            if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
                setIsVisible(true);
                
                // إذا لم ننتهي من جميع الصور، قفل السكرول
                if (!hasCompleted) {
                    setIsLocked(true);
                }
            } else {
                setIsVisible(false);
                setIsLocked(false);
            }
        };

        const handleWheel = (e) => {
            if (isLocked && !hasCompleted) {
                e.preventDefault();
                
                if (e.deltaY > 0) {
                    // سكرول لأسفل - التالي
                    if (currentIndex < images.length - 1) {
                        setCurrentIndex(prev => prev + 1);
                        setIsGoingUp(false);
                    } else {
                        // انتهينا من جميع الصور
                        setHasCompleted(true);
                        setIsLocked(false);
                        // السماح بالسكرول للسيكشن التالي
                        setTimeout(() => {
                            window.scrollBy(0, 200);
                        }, 100);
                    }
                } else if (e.deltaY < 0) {
                    // سكرول لأعلى - السابق
                    if (currentIndex > 0) {
                        setCurrentIndex(prev => prev - 1);
                        setIsGoingUp(true);
                    } else {
                        // إذا كنا في الصورة الأولى وسكرولنا لأعلى، ننتقل للسيكشن السابق
                        setHasCompleted(true);
                        setIsLocked(false);
                        setTimeout(() => {
                            window.scrollBy(0, -200);
                        }, 100);
                    }
                }
            }
        };

        const handleKeyDown = (e) => {
            if (isLocked && !hasCompleted) {
                if (e.key === 'ArrowDown' || e.key === ' ') {
                    e.preventDefault();
                    if (currentIndex < images.length - 1) {
                        setCurrentIndex(prev => prev + 1);
                        setIsGoingUp(false);
                    } else {
                        setHasCompleted(true);
                        setIsLocked(false);
                        setTimeout(() => {
                            window.scrollBy(0, 200);
                        }, 100);
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (currentIndex > 0) {
                        setCurrentIndex(prev => prev - 1);
                        setIsGoingUp(true);
                    } else {
                        setHasCompleted(true);
                        setIsLocked(false);
                        setTimeout(() => {
                            window.scrollBy(0, -200);
                        }, 100);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        section.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            section.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, isLocked, hasCompleted, images.length]);

    // إعادة تعيين الحالة عند الخروج من السيكشن
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top > windowHeight || rect.bottom < 0) {
                setHasCompleted(false);
                setCurrentIndex(0);
                setIsGoingUp(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // إضافة event listener للسكرول بعد الانتهاء من الصور
    useEffect(() => {
        if (hasCompleted) {
            const handleScrollAfterCompletion = (e) => {
                // السماح بالسكرول العادي بعد الانتهاء
                return true;
            };

            window.addEventListener('wheel', handleScrollAfterCompletion);
            return () => window.removeEventListener('wheel', handleScrollAfterCompletion);
        }
    }, [hasCompleted]);

    return (
        <div className='Phone3Section' ref={sectionRef}>
            <div className="intro-text">
                <p>Our latest generation of Photographic Styles gives you greater creative flexibility than ever before, so you can make every photo even more you. And thanks to advances in our image pipeline, you can now reverse any style, anytime.</p>
            </div>
            
            <div className='scrolPhotos'>
                <div className="content-wrapper">
                    <div className="text-section">
                        <div className={`text-content ${isVisible ? 'visible' : ''}`}>
                            <h2 className={`text-title ${isVisible ? 'slide-up' : ''}`}>
                                {textp[currentIndex]?.title}
                            </h2>
                            <p className={`text-description ${isVisible ? 'slide-up' : ''}`}>
                                {textp[currentIndex]?.text}
                            </p>
                        </div>
                    </div>
                    
                    <div className="image-section">
                        <div className="image-container">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Photographic Style ${index + 1}`}
                                    className={`scroll-image ${index === currentIndex ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* مؤشر التقدم */}
                <div className="progress-indicator">
                    {images.map((_, index) => (
                        <div 
                            key={index}
                            className={`progress-dot ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'completed' : ''}`}
                        />
                    ))}
                </div>
                
                {/* مؤشر الاتجاه */}
                <div className="direction-indicator">
                    {isGoingUp ? '↑' : '↓'}
                </div>
            </div>
        </div>
    )
}
