import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import money from "../Icons/wired-lineal-414-money-bag-dollar-hover-shake (4).json"
import boss from "../Icons/wired-lineal-1023-portfolio-hover-pinch.json"
import control from "../Icons/wired-lineal-1472-apple-arcade-joistick-hover-pinch (1).json"
import IconTextComponentOpposite from "../components/can/CanOpposite"
import climb from "../Icons/wired-lineal-1776-staircase-running-loop-cycle.json"
import infinity from "../Icons/wired-lineal-233-arrow-22-hover-cycle (1).json"
import nerd from "../Icons/wired-lineal-16-avatar-woman-nodding-hover-pinch (2).json"
import Button from "../components/WAbutton/Button"
const SecondScreen=()=>{


    return <>
     <div className={styles.description}>אחרי שעשרות בנות עברו דרכי</div>
     <div className={styles.title}>ויצאו עם מקצוע ביד</div>
     <div className={styles.description}>אני אומרת לך בפה מלא</div>
     <div className={styles.title}>גם את יכולה!</div>
     <div className={styles.row}>
    <IconTextComponent text="להרוויח בשבוע מה שאת מרוויחה היום בחודש" icon={money}/>
    <IconTextComponent text="להיות הבוס של עצמך ולקום כל בוקר מחדש בהגשמה עצמית" icon={boss}/>
    <IconTextComponent text="לשלוט בלו''ז של עצמך ובכמות הלקוחות שאת רוצה לקבל" icon={control}/>

     </div>
     <div className={styles.title}>אבל שימי לב!</div>
     <div className={styles.description}>אני לא כאן כדי למכור לך חלומות! את עומדת להפוך לעצמאית בתחום הביוטי, ועם כמה שזה יכול להיות נוצץ (וזה יכול)</div>
     <div className={styles.title}>זה ידרוש ממך</div>
 
     <div className={styles.row}>
    <IconTextComponentOpposite 
        text="להיות נחושה ולא לוותר גם ברגעים הקשים - כי זה שווה את זה!" 
        icon={climb}
    />
    <IconTextComponentOpposite 
        text="התמדה והשקעה - לתרגל ולהתפתח כל הזמן כדי להגיע למצוינות" 
        icon={infinity}
    />
    <IconTextComponentOpposite 
        text="להתייחס למקצוע ברצינות ובמקצועיות - זו השקעה בעתיד שלך" 
        icon={nerd}
    />

     </div>
     <Button text="אני רוצה לשמוע עוד" message="היי הילה, הגעתי מהדף ואני אשמח לשמוע ממך עוד פרטים לגבי הקורס"/>
    </>
}
export default SecondScreen