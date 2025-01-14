import React from 'react';
import styles from './Students.module.css';

// Import your images
import result1 from "../../images/הילה איילין המלצות 1.png";
import result2 from "../../images/הילה איילין המלצות 2.png";
import result3 from "../../images/הילה איילין המלצות 3.png";
import result4 from "../../images/הילה איילין המלצות 4.png";
import result5 from "../../images/הילה איילין המלצות 5.png";
import result6 from "../../images/הילה איילין המלצות 6.png";
import result7 from "../../images/הילה איילין המלצות 7.png";
import result8 from "../../images/הילה איילין המלצות 8.png";
import result9 from "../../images/הילה איילין המלצות 9.png";
import result10 from "../../images/הילה איילין המלצות 10.png";
import result11 from "../../images/הילה איילין המלצות 11.png";
import result12 from "../../images/הילה איילין המלצות 12.png";
import result13 from "../../images/הילה איילין המלצות 13.png";
import result14 from "../../images/הילה איילין המלצות 14.png";
import Button from '../WAbutton/Button';


const Students = (props) => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9,
    result10, result11, result12, result13, result14
  ];

  return (
    <>

      <div className={styles.title} >{props.title}</div>
      {/* <div className={styles.explain}>
        מקבץ בנות שעברו דרכי
      </div> */}
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* First group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
          {/* Second identical group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button text="הילה, בואי נדבר" message="היי הילה הגעתי מהדף, אשמח לשמוע עוד על.."/>
    </>
  );
};

export default Students;