import React from 'react';

import styles from './Chat.module.css';


export const Message = ({ avatar, children, className }) => (

  <div className={styles['message-group']}>

    {avatar && (

      <img 

        loading="lazy" 

        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4b9483de1d73a128a6803e9eee9793e6614add629c10aa9978d58fd7207f92d?placeholderIfAbsent=true&apiKey=91f2b3c7e1024281a6c7da0dfb0eaca6" 

        className={styles.avatar} 

        alt=""

      />

    )}

    <p className={className}>

      {children}

    </p>

  </div>

);