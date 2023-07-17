import styles from '../styles/projects.module.scss';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section className={styles.section}>
            <h1 className={styles['h1-projects']}>Projetos</h1>
            <article className={styles['projects-container']}>
                <ProjectCard />
            </article>
        </section>
    )
}

export default Projects;