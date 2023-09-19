import { ProjectArray } from "../../utils/ProjectArray";

import iconDeploy from "../../images/iconDeploy.svg";
import iconGithub from "../../images/iconGithubProject.svg";
import { useState } from "react";

import styles from './styles.module.css';

const initialProject = {
  project1: 0,
  project2: 1,
  project3: 2,
};

export default function CardProject() {
const [project, setProject] = useState(initialProject);

const handleClickLess = () => {
  if (project.project1 === 0) {
    setProject({
      project1: ProjectArray.length - 1,
      project2: project.project2 - 1,
      project3: project.project3 - 1,
    });
    return;
  } else if (project.project2 === 0) {
    setProject({
      project1: project.project1 - 1,
      project2: ProjectArray.length - 1,
      project3: project.project3 - 1,
    });
    return;
  } else if (project.project3 === 0) {
    setProject({
      project1: project.project1 - 1,
      project2: project.project2 - 1,
      project3: ProjectArray.length - 1,
    });
    return;
  }
  setProject({
    project1: project.project1 - 1,
    project2: project.project2 - 1,
    project3: project.project3 - 1,
  })
}

const handleClickMore = () => {
  if (project.project1 === ProjectArray.length - 1) {
    setProject({
      project1: 0,
      project2: project.project2 + 1,
      project3: project.project3 + 1,
    });
    return;
  } else if (project.project2 === ProjectArray.length - 1) {
    setProject({
      project1: project.project1 + 1,
      project2: 0,
      project3: project.project3 + 1,
    });
    return;
  } else if (project.project3 === ProjectArray.length - 1) {
    setProject({
      project1: project.project1 + 1,
      project2: project.project2 + 1,
      project3: 0,
    });
    return;
  }
  setProject({
    project1: project.project1 + 1,
    project2: project.project2 + 1,
    project3: project.project3 + 1,
  })
}

  return (
    <div className={styles.MainContainer} >
      <ul>
        <li><button onClick={ handleClickLess }>esquerda</button></li>
        <li>
        <img src={ProjectArray[project.project1].image} alt="" />
          <h3>{ProjectArray[project.project1].title}</h3>
          <p>{ProjectArray[project.project1].description}</p>
          <p>Tech Stack: {ProjectArray[project.project1].tech}</p>
          <ul>
            <li><a href={ProjectArray[project.project1].deploy}><img src={iconDeploy} alt="" />Ver Site</a></li>
            <li><a href={ProjectArray[project.project1].github}><img src={iconGithub} alt="" />Ver o Codigo</a></li>
          </ul>
        </li>
        <li>
        <img src={ProjectArray[project.project2].image} alt="" />
          <h3>{ProjectArray[project.project2].title}</h3>
          <p>{ProjectArray[project.project2].description}</p>
          <p>Tech Stack: {ProjectArray[project.project2].tech}</p>
          <ul>
            <li><a href={ProjectArray[project.project2].deploy}><img src={iconDeploy} alt="" />Ver Site</a></li>
            <li><a href={ProjectArray[project.project2].github}><img src={iconGithub} alt="" />Ver o Codigo</a></li>
          </ul>
        </li>
        <li>
        <img src={ProjectArray[project.project3].image} alt="" />
          <h3>{ProjectArray[project.project3].title}</h3>
          <p>{ProjectArray[project.project3].description}</p>
          <p>Tech Stack: {ProjectArray[project.project3].tech}</p>
          <ul>
            <li><a href={ProjectArray[project.project3].deploy}><img src={iconDeploy} alt="" />Ver Site</a></li>
            <li><a href={ProjectArray[project.project3].github}><img src={iconGithub} alt="" />Ver o Codigo</a></li>
          </ul>
        </li>
        <li>
          <button onClick={ handleClickMore } >direita</button>
        </li>
      </ul>
    </div>
  )
}
