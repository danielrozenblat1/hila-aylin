import React from 'react';
import styles from './Recommends.module.css';

// Import your images
import result1 from "../../images/הילה איילין עבודות 1.png";
import result2 from "../../images/הילה איילין עבודות 2.png";
import result3 from "../../images/הילה איילין עבודות 3.png";
import result4 from "../../images/הילה איילין עבודות 4.png";
import result5 from "../../images/הילה איילין עבודות 5.png";
import result6 from "../../images/הילה איילין עבודות 6.png";
import result7 from "../../images/הילה איילין עבודות 7.png";
import result8 from "../../images/הילה איילין עבודות 8.png";
import result9 from "../../images/הילה איילין עבודות 9.png";
import result10 from "../../images/הילה איילין עבודות 10.png";
import result11 from "../../images/הילה איילין עבודות 11.png";
import result12 from "../../images/הילה איילין עבודות 12.png";
import result13 from "../../images/הילה איילין עבודות 13.png";
import result14 from "../../images/הילה איילין עבודות 14.png";
import result15 from "../../images/הילה איילין עבודות 15.png";
import result16 from "../../images/הילה איילין עבודות 16.png";
import result17 from "../../images/הילה איילין עבודות 17.png";
import result18 from "../../images/הילה איילין עבודות 18.png";
import result19 from "../../images/הילה איילין עבודות 19.png";

const Recommendations = (props) => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9,
    result10, result11, result12, result13, result14, result15, result16, result17, result18, result19
  ];

  return (
    <>
      <div className={styles.title} id="קורס">{props.title}</div>
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
    </>
  );
};

export default Recommendations;