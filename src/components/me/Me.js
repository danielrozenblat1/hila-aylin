import React from 'react';
import styles from './Me.module.css';
import hila from "../../images/הילה תמונת תדמית.png";
import Students from '../recommends/Students';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={hila} alt="הילה איילין" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>הילה איילין</h1>
          <div className={styles.subtitle}>"אני מאמינה שכל אישה יכולה להגשים את החלומות שלה"</div>
          <p className={styles.description}>
            כמומחית לאיפור קבוע כבר עשור, אני מלווה נשים במסע להגשמת החלומות שלהן - בין אם זה בשיפור הביטחון העצמי דרך טיפולי איפור קבוע מקצועיים, או בבניית קריירה עצמאית ומשגשגת בתחום.
          </p>
          <p className={styles.description}>
            בשנים האחרונות זכיתי להעניק טיפולי איפור קבוע למאות נשים ולהכשיר עשרות תלמידות שהפכו לאמניות איפור קבוע מצליחות. אני מאמינה שכל אחת יכולה להגשים את החלומות שלה! התשוקה שלי היא לראות את הנשים שאני מלווה פורחות - בין אם זה דרך מראה טבעי ומחמיא של גבות מושלמות, או דרך עצמאות כלכלית והגשמה מקצועית.
          </p>
        </div>
      </div>
      <Students title="וזה מה שיש להן להגיד"/>
    </>
  );
};

export default AboutMe;