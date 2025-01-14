import React from 'react';
import FAQItem from "../components/questions/Questions";
import styles from "./ThirdScreen.module.css";
import Button from '../components/WAbutton/Button';

const ThirdScreen = () => {
  return <>

      <div className={styles.title}>אתן שואלות ואני עונה</div>
      
      <FAQItem 
        question="האם אני באמת יכולה להגיע להכנסה של 20,000 ש״ח ומעלה בחודש?"
        answer="בהחלט! כאמנית איפור קבוע מנוסה, אני בעצמי מרוויחה בין 20,000 ל-50,000 ש״ח בחודש. הצלחה כזו דורשת התמדה, השקעה ורצינות, אבל היא בהחלט אפשרית כשיש לך את הכלים והליווי הנכונים."
      />
      

  
      <FAQItem 
        question="מה אם אני לא מצליחה להבין או לבצע את הטכניקות בקורס?"
        answer="אני מאמינה שהכל מתחיל ונגמר בביטחון. אני כאן לבנות את הביטחון העצמי שלך עד שתביני את כל החומר ב-100%. את לא עוברת לחלק המעשי עד שאת מרגישה לגמרי בטוחה בתיאוריה, ואני נשארת צמודה אלייך לאורך כל התהליך עם ביקורת בונה ותמיכה מתמדת."
      />

      <FAQItem 
        question="כמה זמן לוקח עד שרואים תוצאות בעסק?"
        answer="ההצלחה תלויה בהשקעה שלך. אני מספקת לך את כל הכלים - ערכת עבודה מלאה, ליווי צמוד גם אחרי הקורס, והכשרה מקיפה שכוללת לא רק את הטכניקה אלא גם איך להקים ולנהל עסק מצליח. תלמידות שמתמידות ומשקיעות מתחילות לראות תוצאות כבר מהחודשים הראשונים."
      />

      <FAQItem 
        question="איך אדע אם התחום הזה מתאים לי?"
        answer="הקורס מיועד לנשים שרוצות לקחת את העתיד שלהן בידיים ולהיות עצמאיות. אם את אוהבת לעבוד עם אנשים, יש לך תשוקה לאסתטיקה ואת מוכנה להשקיע בעצמך - זה בדיוק בשבילך. אני כאן לענות על כל השאלות שלך ולעזור לך להבין אם זה הכיוון הנכון עבורך."
      />




      <FAQItem 
        question="אני עובדת במשרה מלאה, איך אוכל להשתלב בקורס?"
        answer="הקורס מתוכנן בצורה גמישה שמתחשבת בנשים עובדות. אנחנו יכולות להתאים את שעות הלימוד לזמנים שנוחים לך, והעובדה שאני מלמדת בקבוצות קטנות מאפשרת לנו גמישות רבה יותר. המטרה היא לאפשר לך ללמוד ולהתפתח מבלי לוותר על ההכנסה הנוכחית שלך."
      />

      <FAQItem 
        question="מה אם כבר התנסיתי בקורס דומה בעבר ולא הצלחתי?"
        answer="אני מבינה את החשש, וחשוב לי לשמוע על החוויה הקודמת שלך כדי להבין מה לא עבד. הקורס שלי שונה - הוא בנוי בצורה מדורגת, עם קבוצות קטנות של עד 3 תלמידות, ומותאם אישית לקצב ולצרכים שלך. אני מתחייבת ללוות אותך עד שתרגישי בטוחה ומוכנה לצאת לדרך עצמאית."
      />
  <Button text="הילה, בואי נדבר!" message="היי הילה הגעתי מהדף, אשמח לשמוע עוד על.."/>
  </>
};

export default ThirdScreen;