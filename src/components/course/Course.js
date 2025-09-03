import React, { useEffect, useRef } from 'react';
import styles from './Course.module.css';
import { Player } from '@lordicon/react';
import book from "../../Icons/wired-outline-112-book-morph-open.json";
import needle from "../../Icons/wired-outline-775-needle-hover-pinch.json";
import shake from "../../Icons/wired-outline-645-people-handshake-transaction-hover-pinch (1).json";
import digital from "../../Icons/wired-outline-1027-marketing-campaign-hover-jump.json";
import medal from "../../Icons/wired-outline-434-prize-padge-ribbon-hover-enlarge.json";
import certificate from "../../Icons/wired-outline-1483-parchment-hover-pinch.json";
import ScrollReveal from 'scrollreveal';
import Button from '../WAbutton/Button';
const AcademySyllabus = () => {
  const containerRef = useRef(null);
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);
  const playerRef5 = useRef(null);
  const playerRef6 = useRef(null);
  useEffect(()=>{
 
    ScrollReveal().reveal(`.${styles.checkmark}`, {
      duration: 1000,
      distance: "30px",
      origin: "right", // Start from the right side
      easing: "ease-out",
      reset:false,
      viewFactor: 0.2,
      interval: 300, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null
    });
    ScrollReveal().reveal(`.${styles.includedText}`, {
      duration: 1000,
      distance: "30px",
      origin: "left", // Start from the right side
      easing: "ease-out",
      reset:false,
      viewFactor: 0.2,
      interval: 300, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null
    });
},[])
  useEffect(() => {
    [playerRef1, playerRef2, playerRef3, playerRef4, playerRef5, playerRef6].forEach(ref => {
      if (ref.current) ref.current.playFromBeginning();
    });




    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(`.${styles.includedItem}, .${styles.advantageCard}`);
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleComplete = (ref) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.playFromBeginning();
      }
    }, 2500);
  };

  const courseStructure = [
    '4 מפגשים תאורטים',
    '4 מפגשים מעשיים',
    '2 הדגמות ב-LIVE לטכניקות שונות',
    '4 עבודות מעשיות על מודליסטיות',
    'יצירת תיק עבודות לתחילת דרכך'
  ];

  const includedItems = [
    {
      text: 'חוברת לימודים מקצועית עם כל הידע שרכשתי במשך השנים',
      ref: playerRef1,
      icon: book
    },
    {
      text: 'ערכת עבודה מלאה ומאובזרת הכוללת מכשיר מכני למיקרופיגמנטציה, ידית אחיזה וספק כוח, פיגמנטים, מחטים, לטקס, כוסיות פיגמנט, אפליקטור ועוד...',
      ref: playerRef2,
      icon: needle
    },
    {
      text: 'מדריך מתנה לשיווק דיגיטלי ובניית עסק מצליח',
      ref: playerRef3,
      icon: digital
    },
    {
      text: 'ליווי אישי לאורך כל הדרך',
      ref: playerRef4,
      icon: shake
    },
    {
      text: 'רמת לימודים גבוהה מאוד',
      ref: playerRef5,
      icon: medal
    },
    {
      text: 'תעודת הסמכה בדרגת ARTIST שתוענק לך בסיום הלימודים מטעם אקדמיית HILA AYLIN ACADEMEY',
      ref: playerRef6,
      icon: certificate
    }
  ];

  const advantages = [
    {
      title: 'הקורס הינו פרונטלי',
      description: 'את יכולה להרגיש בטוחה שהילה והצוות שלה איתך לאורך כל הדרך'
    },
    {
      title: 'מענה קבוע',
      description: 'גם במהלך הקורס וגם לאחריו יינתן מענה מלא לכל שתצטרכי! אנחנו זמינים בווצאפ,בטלפון ובקבוצות הסגורות'
    },
    {
      title: 'השתלמויות מתקדמות',
      description: 'בוגרות האקדמיה של HILA AYLIN ACADEMEY תוכלי להצטרף לחבורים והשתלמויות הנערכים באקדמיה'
    },
    {
      title: 'אחריות מלאה',
      description: 'פספסת שיעור? צריכה חיזוקים נוספים? יש לך אפשרות לחזור על הקורס או על חלקו לבחירתך ללא עלות'
    },
    {
      title: 'תרגול והתנסות',
      description: 'ימי תרגול יפתחו מידי חודש, תוכלי להגיע ולתרגל על גבי לקסט ולצבור עוד ידע וביטחון'
    },
    {
      title: 'ליווי לאחר הלימודים',
      description: 'יש לך את הנייד והליווי הפרטי של הילה לכל שאלה, התייעצות, תמיכה, שיתוף ברגשות שלך ובדרך שלך'
    }
  ];

  return <>
    <div className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>מסלול הלימודים של האקדמיה</h2>
          <div className={styles.courseStructure}>
           
            <div className={styles.phases}>
              <span>שיטת השערה</span>
              <span>הצללת פודרה</span>
              <span>השיטה המשולבת</span>
            </div>
            <h2 className={styles.sectionTitle}>המסלול כולל</h2>
            <div className={styles.meetings}>
              {courseStructure.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.meetingItem} ${styles['image' + (index + 1)]}`}
                >
                  <p className={styles.meetingText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>מה את מקבלת כשאת מצטרפת אלינו</h2>
          <div className={styles.includedList}>
            {includedItems.map((item, index) => (
              <div key={index} className={styles.includedItem}>
                <div className={styles.iconWrapper}>
                  <Player
                    ref={item.ref}
                    icon={item.icon}
                    size={55}
                    className={styles.icon}
                    onComplete={() => handleComplete(item.ref)}
                  />
                </div>
                <p className={styles.includedText}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>למה דווקא אנחנו?</h2>
          <div className={styles.advantagesGrid}>
            {advantages.map((item, index) => (
              <div key={index} className={styles.advantageCard}>
                <div className={styles.checkmark}>✓</div>
                <h3 className={styles.advantageTitle}>{item.title}</h3>
                <p className={styles.advantageDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Button text="הילה, אני רוצה שנדבר!" message="היי הילה הגעתי מהדף, אשמח לשמוע עוד על.."/>
  </>
};

export default AcademySyllabus;