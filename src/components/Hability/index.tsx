import { HabilityArray } from "../../utils/Habilitys";
import CardHability from "../CardHability";
import styles from "./styles.module.css";

export default function Hability() {
  return (
    <section className={styles.Services}>
      <h3>My skills</h3>
        <div className={styles.myServices}>
            {HabilityArray.map((item, index) => <CardHability key={index} {...item} /> )}
        </div>
    </section>
  )
}
