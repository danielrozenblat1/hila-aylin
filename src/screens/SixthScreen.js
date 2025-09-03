import React from 'react';
import { Check } from 'lucide-react';
import styles from "./SixthScreen.module.css";
import course from "../images/קורס איפור קבוע.png"
const SixthScreen = () => {
    return (
        <>
            <div className={styles.title}>קורס איפור קבוע מודרני</div>
            <div className={styles.center}><img className={styles.image} src={course} alt="הילה איילין איפור קבוע"/></div>
            <div className={styles.description}>הקורס שייתן לך את כל הכלים והידע <br/> להרוויח הרבה יותר במינימום זמן ומאמץ!</div>
            <div className={styles.benefitsContainer}>
                <div className={styles.benefitItem}>
                    <Check className={styles.checkIcon} strokeWidth={3}/>
                    <span>להנות מהעשייה היומיומית שלך</span>
                </div>
                <div className={styles.benefitItem}>
                    <Check className={styles.checkIcon} strokeWidth={3} />
                    <span>להיות עצמאית בתחום המתגמל ביותר בעולם הביוטי</span>
                </div>
                <div className={styles.benefitItem}>
                    <Check className={styles.checkIcon} strokeWidth={3} />
                    <span>ליצור שינוי אמיתי בחיים שלך</span>
                </div>
            </div>
            <div className={styles.description}>אם תמיד חלמת לקום בבוקר עם תחושת סיפוק, לדעת שבכל יום את עוסקת בדיוק <strong>במה שאת הכי אוהבת</strong> וגם להרוויח מזה סכומים <br/>שכשכירה רק היית חולמת עליהם</div>
            <div className={styles.subTitleContainer}>
                <div className={styles.subTitle}>כעצמאית בתחום האיפור הקבוע  <br/> זה לא חלום, זו המציאות!</div>
            </div>
        </>
    );
};

export default SixthScreen;