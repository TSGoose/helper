import React, { useState } from 'react';

import styles from './Welcome.module.css';

//import { CompanyCard } from './CompanyCard';




export const Welcome = ({ onNextPage }) => {

  return (
    <div className={styles.container}>
        <h1 className={styles.welcomeText}>
            Вас приветствует
        </h1>
        <h2 className={styles.advisorTitle}>
            Советник
        </h2>
        <img 
        loading="lazy" 
        src="Советник 1.png" 
        className={styles.advisorImage} 
        alt="Advisor illustration"

        />
        <button 
        className={styles.startButton}
        onClick={() => {onNextPage();}}
        aria-label="Start consultation"
        >
            начать
        </button>
    </div>
  );

};