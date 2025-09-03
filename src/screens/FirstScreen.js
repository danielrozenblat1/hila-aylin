import React, { useRef, useEffect, useState } from 'react';
import styles from "./FirstScreen.module.css";
import { ChevronDown } from 'lucide-react';
import lips from "../Icons/wired-outline-1597-lips-hover-pinch.json"
import learn from "../Icons/wired-outline-406-study-graduation-hover-pinch.json"
import PinkScrollButton from '../components/button/Button';
import Recommendations from '../components/recommends/Recommends';
const FirstScreen = ({ scrolled }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const topLeftImageRef = useRef(null);
  const topRightImageRef = useRef(null);
  const centerImageRef = useRef(null);

  useEffect(() => {
    const imageRefs = [topLeftImageRef, topRightImageRef, centerImageRef];
    let loadedCount = 0;

    const checkImageLoaded = (ref) => {
      if (ref.current) {
        const computedStyle = window.getComputedStyle(ref.current);
        const backgroundImage = computedStyle.backgroundImage;
        
        if (backgroundImage && backgroundImage !== 'none') {
          const img = new Image();
          img.src = backgroundImage.slice(4, -1).replace(/["']/g, "");
          
          if (img.complete) {
            loadedCount++;
          } else {
            img.onload = () => {
              loadedCount++;
              if (loadedCount === imageRefs.length) {
                setImagesLoaded(true);
              }
            };
            img.onerror = () => {
              loadedCount++;
              if (loadedCount === imageRefs.length) {
                setImagesLoaded(true);
              }
            };
          }
        } else {
          loadedCount++;
        }
      } else {
        loadedCount++;
      }
      
      if (loadedCount === imageRefs.length) {
        setImagesLoaded(true);
      }
    };

    imageRefs.forEach(checkImageLoaded);
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (topLeftImageRef.current && topRightImageRef.current) {
        topLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${scrollY * 0.25}px)`;
        topRightImageRef.current.style.transform = `rotate(20deg) translateY(${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imagesLoaded]);

  return <>
    <div className={scrolled ? styles.containerP : styles.container}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          בין אם את חולמת להתעורר כל בוקר עם מראה מושלם
          או להגשים את עצמך בעולם האיפור הקבוע,
          זה המקום שלך להתחיל את המסע
        </div>
      </div>
      <div className={styles.explainContainer}>
        <div className={styles.imageContainer}>
          <div ref={topLeftImageRef} className={styles.topLeftImage}></div>
          <div ref={topRightImageRef} className={styles.topRightImage}></div>
          <div ref={centerImageRef} className={styles.centerImage}></div>
        </div>
        <div className={styles.explain}>
        אומנות האיפור הקבוע מתחילה כאן
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40} color="#472e1b" />
      </div>
    </div>
  <div className={styles.title}>עם מי אני מדברת?</div>
  <div className={styles.buttonContainer}>
        <PinkScrollButton text="אני רוצה ללמוד את התחום" icon={learn} to="קורסים"/>
        <PinkScrollButton text="אני רוצה לקבוע טיפול" icon={lips} to="טיפולים"/>
        </div>
 
    </>
};

export default FirstScreen;