import React, { useState, useRef, useEffect } from 'react';
import styles from './MoreServices.module.css';
// Import the treatment main images
import powderBrowsImage from "../../images/טיפול ראשון תוצאה.jpeg";
import wBrowsImage from "../../images/טיפול שני תוצאה 3.jpeg";
// Import gallery images for first treatment (Powder Brows)
import first1 from "../../images/טיפול ראשון תוצאה.jpeg"
import first2 from "../../images/טיפול ראשון תוצאה 2.jpeg"
import first3 from "../../images/טיפול ראשון תוצאה 3.jpeg"
// Import gallery images for second treatment (W Brows)
import second1 from "../../images/טיפול שני תוצאה.jpeg"
import second2 from "../../images/טיפול שני תוצאה 2.jpeg"
import second3 from "../../images/טיפול שני תוצאה 3.jpeg"
import Button from "../../components/WAbutton/Button"
import moreimages1 from "../../images/הילה איילין תמונות נוספות טיפולים 1.png"
import moreimages2 from "../../images/הילה איילין תמונות נוספות טיפולים 2.png"
import moreimages3 from "../../images/הילה איילין תמונות נוספות טיפולים 3.png"
import moreimages4 from "../../images/הילה איילין תמונות נוספות טיפולים 4.png"
import moreimages5 from "../../images/הילה איילין תמונות נוספות טיפולים 5.png"
import moreimages6 from "../../images/הילה איילין תמונות נוספות טיפולים 6.png"
import moreimages7 from "../../images/הילה איילין תמונות נוספות טיפולים 7.png"
import moreimages8 from "../../images/הילה איילין תמונות נוספות טיפולים 8.png"
import moreimages9 from "../../images/הילה איילין תמונות נוספות טיפולים 9.png"
const TreatmentGallery = ({ type }) => {
  const images = type === 'powder' 
    ? [first1, first2, first3, moreimages1, moreimages2, moreimages3,  moreimages8,]
    : [second1, second2, second3, moreimages9, moreimages5, moreimages4];

  return (
    <div className={styles.gallerySection}>
      <h3 className={styles.galleryTitle}>וקצת תוצאות</h3>
      <div className={type === 'powder' ? styles.galleryGridFirst : styles.galleryGridSecond}>
        {images.map((img, index) => (
          <div key={index} className={styles.galleryItem}>
            <img 
              src={img}
              alt={`תוצאה ${index + 1}`}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TreatmentCard = ({ content, imageUrl, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const treatmentName = type === 'powder' ? 'גבות בטכניקת ה powder brows' : 'גבות בטכניקת ה w brows';

  return (
    <div className={styles.card}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.toggleButton} ${isOpen ? styles.active : ''}`}
      >
        <div className={styles.buttonContent}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img 
                src={imageUrl} 
                alt={content.title} 
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.subtitle}>{content.subtitle}</p>
          </div>
        </div>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
      </button>

      <div 
        style={{ height: `${height}px` }}
        className={styles.contentWrapper}
      >
        <div ref={contentRef} className={styles.content}>
          <div className={styles.detailsList}>
            {content.details.map((section, index) => (
              <div key={index} className={styles.detailSection}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <p className={styles.sectionContent}>{section.content}</p>
              </div>
            ))}
          </div>
          <TreatmentGallery type={type} />
          <div className={styles.buttonContainer}>
            <Button 
              text="לעוד פרטים לחצי כאן"
              messgae={`היי הילה, הגעתי מהדף ואשמח לשמוע עוד על ${treatmentName}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const treatmentContent = {
  powderBrows: {
    title: "גבות בטכניקת ה powder brows",
    subtitle: "טכניקת הספריי פודרה החדשנית והטבעית ביותר!",
    details: [
      {
        title: "מה מיוחד בטכניקה?",
        content: "הטכניקה החדשנית והמדהימה הזו מאפשרת ליצור לך אפקט של גבות מלאות ואחידות (מראה רך של הצללה בגבות) בתוצאה הסופית הגבות נראות מלאות עדינות וטבעיות מבלי שיבחינו שיש צבע בכל הגבה. להבדיל מטכניקת ההצללה המיושנת בטכניקת הספריי פודרה אנחנו יוצרות משחק של אור וצל בגבה מה שנותן לנו מראה רך ונורא טבעי לאחר החלמה מלאה. הטכניקה נקלטת באופן מדהים על כל סוגי העור"
      },
      {
        title: "למי הטכניקה מתאימה?",
        content: "הטכניקה יכולה להתאים לך במקרה שיש לך גבות דלילות, שקופות או בהירות, דקות, ללא צורה, אי סימטריה, טשטוש צלקת, ובכלל אם את מרגישה שאת מתעסקת עם הגבות כל יום והיית רוצה לחסוך את התסכול הזה! הטכניקה מתאימה לכל סוגי העור, כן כן… גם לעור שומני ועור בוגר הידועים כעורות הבעייתיים ביותר"
      },
      {
        title: "איך מתבצע התהליך?",
        content: "הטיפול מתחיל בתיאום ציפיות להבנת הצרכים שלך, יצירת שרטוט מדויק של צורת הגבות העתידיות, ולאחר אישור הסקיצה עוברים לטיפול עצמו. הטכניקה מבוצעת ע״י מכשור חשמלי עם מחט דקיקה ועדינה, ללא דימום! משך הטיפול הוא בין שעה וחצי לשעתיים"
      },
      {
        title: "תהליך ההחלמה",
        content: "בשבוע הראשון הגבות יראו מעט כהות, לאחר 5-7 ימים יעברו קילוף עדין והצבע יתבהר בכ-40%. החלמה מלאה אורכת כ-6 שבועות, ואז נפגש לטיפול השני לשיפור והשלמת התוצאה"
      }
    ]
  },
  wBrows: {
    title: "גבות בטכניקת ה w brows",
    subtitle: "הדור הבא של שיטת השערה החדשנית והמתקדמת ביותר!",
    details: [
      {
        title: "מה מיוחד בטכניקה?",
        content: "הטכניקה החדשנית והמדהימה הזו היא טכניקה מתקדמת של שיטת השערה- שמאפשרת ליצור לך אפקט של שילוב שערות עדינות וטבעיות בגבה מבלי שיבחינו איזו שערה היא הטבעית מבין השערות. להבדיל ממיקרובליידינג או שיטת השערה הקלאסית, טכניקת הw brows נקלטת באופן מדהים על העור לא 'נמרחת' לאחר ההחלמה ונשמרת כשערה-שערה"
      },
      {
        title: "למי הטכניקה מתאימה?",
        content: "הטכניקה יכולה להתאים לך במקרה שיש לך גבות דלילות, שקופות או בהירות, דקות, ללא צורה, ובכלל אם את מרגישה שאת מתעסקת עם הגבות כל יום והיית רוצה לחסוך את התסכול הזה! הטכניקה מתאימה לכל סוגי העור, כן כן… גם לעור שומני ועור בוגר הידועים כעורות הבעייתיים ביותר"
      },
      {
        title: "איך מתבצע התהליך?",
        content: "הטיפול מתחיל בתיאום ציפיות, יצירת שרטוט מדויק של הגבות, ולאחר אישור עוברים לטיפול עצמו. הטכניקה מבוצעת בעזרת מחט דקיקה ועדינה, יוצרת שערה-שערה בעדינות ובמינימום כאב. אין דימום במהלך הטיפול! משך הטיפול הוא בין שעה וחצי לשעתיים"
      },
      {
        title: "תהליך ההחלמה",
        content: "בשבוע הראשון הגבות יראו מעט כהות, לאחר 5-7 ימים יעברו קילוף עדין והצבע יתבהר בכ-40%. החלמה מלאה אורכת כ-6 שבועות, ואז נפגש לטיפול השני לשיפור והשלמת התוצאה"
      }
    ]
  }
};

const TreatmentCards = () => {
  const treatmentImages = {
    powderBrows: powderBrowsImage,
    wBrows: wBrowsImage
  };

  return (
    <div dir="rtl" className={styles.cardsContainer}>
      {Object.entries(treatmentContent).map(([key, content]) => (
        <TreatmentCard 
          key={key}
          content={content}
          imageUrl={treatmentImages[key]}
          type={key === 'powderBrows' ? 'powder' : 'wBrows'}
        />
      ))}
    </div>
  );
};

export default TreatmentCards;