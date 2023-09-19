import eu from "../../images/eu.png";

import styles from "./styles.module.css";

export default function Curriculo() {

  return (
    <section
      aria-label="seção curriculo dowload Ian Borges"
      className={styles.Section}
    >
      <div>
        <h2>
          Ola 👋, Meu Nome é<br />
          Ian Pedro Borges
          Eu sou
        </h2>
        <h2 className={styles.animation}>
        Desenvolvedor Full Stack
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          distinctio, aspernatur exercitationem hic delectus mollitia illo
          laborum quam vero porro?
        </p>
        <a href="#">Dowload CV</a>
      </div>
      <img src={eu} alt="Minha imagem" />
    </section>
  );
}
