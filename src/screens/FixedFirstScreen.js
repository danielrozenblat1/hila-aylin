import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import lips from "../Icons/wired-outline-1597-lips-hover-pinch.json";
import styles from './FixedFirstScreen.module.css';
import PinkScrollButton from '../components/button/Button';
import learn from "../Icons/wired-outline-406-study-graduation-hover-pinch.json"
import brows from "../Icons/wired-outline-775-needle-hover-pinch (3).json"
import middleImage from "../images/הילה איילין תדמית 1.png";
import rightImage from "../images/הילה איילין תדמית 2.png"
import leftImage from "../images/הילה איילין תדמית 3.png"
import GradientLoader from '../components/loader/Loader';
const FixedFirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>HILA AYLIN ACADEMY</h1>
  
        <div className={styles.buttonContainer}>
        <PinkScrollButton text="קורס גבות מקיף למתחילות" icon={learn} to="קורס"/>
        <PinkScrollButton text="השתלמות אישית למקצועיות" icon={lips} to="טיפולים"/>
        <PinkScrollButton text="טיפולי גבות בשיטות מתקדמות" icon={brows} to="טיפולים"/>
        </div>
      </div>
    </div>
  );
};

export default FixedFirstScreen;