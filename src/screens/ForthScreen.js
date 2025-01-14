
import TreatmentCards from "../components/moreServices/MoreServices"
import styles from "./ForthScreen.module.css"

const ForthScreen=()=>{


    return <>
     <div className={styles.title} id="טיפולים">הטיפולים שלי וקצת עליהם</div>
     <div className={styles.description}>בנוסף לקורסים שאני מעבירה אני מבצעת גם טיפולים בעצמי והחלטתי להרחיב לכן עליהם קצת  - לחצי על כל טיפול כדי להבין מה מתאים לך יותר</div>
<TreatmentCards/>

</>
}
export default ForthScreen