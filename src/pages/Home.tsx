import { useState } from 'react';
import styles from '../styles/home.module.scss';
import Header from '../components/Header';

function Home() {
  return (
    <div className={styles['main-container']}>
      <Header />
      <div className={styles.line} />
    </div>
  );
}

export default Home;