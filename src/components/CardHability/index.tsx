import { Hability } from "../../types/@types.types";

import styles from "./styles.module.css";

export default function CardHability({name,image,description}: Hability) {
  return (
        <ul className={styles.cardUl}>
            <li>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
            </li>
        </ul>
  )
}
