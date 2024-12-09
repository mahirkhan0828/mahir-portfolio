import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import {projects} from './util/projectData';

export const metadata = {
  title: 'Projects | Mahir Khan Portfolio',
};

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
