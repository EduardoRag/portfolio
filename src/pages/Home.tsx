import styles from '../styles/home.module.scss';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';

function Home() {
  return (
    <div className={styles['main-container']}>
      <Header />
      <div className={styles.line} />
      <AboutMe />
      <div className={styles.line} />
    </div>
  );
}

export default Home;