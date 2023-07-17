import styles from '../styles/home.module.scss';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

function Home() {
  return (
    <main className={styles['main-container']}>
      <Header />
      <div className={styles.line} />
      <AboutMe />
      <div className={styles.line} />
      <Projects />
      <div className={styles.line} />
    </main>
  );
}

export default Home;