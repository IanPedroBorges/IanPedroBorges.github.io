import CardProject from "../CardProject";
import styles from "./styles.module.css";
// import Lottie from "lottie-react";
//  import animation from '../../images/animations/animation_lmazrpfl.json';

//<Lottie  animationData={animation} />

export default function Project() {

  return (
    <section className={styles.project}>
      <div className={styles.sobreTitulo}>
        <h1>My Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis
          mollitia dolorum officia maiores laborum ab, quae, atque minima
          deserunt non ducimus, laboriosam voluptatum vero exercitationem veniam
          veritatis porro consequatur?
        </p>
        <div aria-label="Seção apenas de ilustrações de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.projectModels}>
        <ul aria-label="Navegação entre modelos expecificos de projetos">
          <li>All</li>
          <li>Studies</li>
          <li>Professional</li>
        </ul>
      </div>
      <div className={styles.projectArmazenamento}>
        <CardProject />
      </div>
    </section>
  );
}
