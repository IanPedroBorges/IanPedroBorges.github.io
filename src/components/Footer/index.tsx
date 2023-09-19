import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.MainContainer}>
      <ul>
        <li><BsGithub /></li>
        <li>
          <BsWhatsapp />
        </li>
        <li>
          <BsLinkedin />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <BiLogoGmail />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
