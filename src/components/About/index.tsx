import { BsPhone, BsHouseDoorFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import eu from "../../images/eu.png";

import styles from "./styles.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <article aria-label="seção sobre mim" className={styles.sobre}>
      <div className={styles.sobreTitulo}>
          <h1>About Me</h1>
          <p>Professional Profile - There is All About me</p>
          <div aria-label="Seção apenas de ilustrações de botões">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <img src={eu} alt="Minha Imagem" />
        <div className={styles.sobreConteudo}>
          <div className={styles.sobreTexto}>
            <h1>I'M Dev Full Stack - Ian Borges</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              repudiandae esse ullam obcaecati eum deleniti expedita fuga labore
              magnam laborum!
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              dolorum sunt? Id unde quos eius ullam. Omnis, sed eum rerum veniam
              quia velit repellendus molestiae quis, odio quasi at facere.
            </p>
          </div>
          <div className={styles.sobreInfo}>
            <p>
              <i>
                <BsPhone />
              </i>{" "}
              (33) 987157144
            </p>
            <p>
              <i>
                <BsHouseDoorFill />
              </i>{" "}
              Coroaci - Minas Gerais
            </p>
          <p>
            <i>
              <MdEmail />
            </i>{" "}
            ianpborges0@gmail.com
          </p>
          </div>
        </div>
      </article>
    </main>
  );
}
