import React, { useState } from 'react';

import styles from './CompanyCard.module.css';

export const CompanyCard = ({

    title,
    description,
    isSelected,
    onChange,
    value,
    name,
    id
  
  }) => {
  
    return (
  
      <label className={styles.cardWrapper} htmlFor={id}>
  
        <input
  
          type="radio"
  
          className={styles.input}
  
          checked={isSelected}
  
          onChange={onChange}
  
          value={value}
  
          name={name}
  
          id={id}
  
        />
  
        <article 
  
          className={`${styles.card} ${
  
            isSelected ? styles.highlighted : styles.regular
  
          }`}
  
        >
  
          <h3 className={styles.title}>{title}</h3>
  
          <p className={styles.description}>{description}</p>
  
        </article>
  
      </label>
  
    );
  
  };