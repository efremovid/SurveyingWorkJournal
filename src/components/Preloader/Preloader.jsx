import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = ({ 
  height = 4, 
  color = '#007bff', 
  duration = 1.5,
  className = '' 
}) => {
  return (
    <div className={`${styles.preloaderContainer} ${className}`}>
      <div 
        className={styles.preloaderBar}
        style={{
          '--height': `${height}px`,
          '--color': color,
          '--duration': `${duration}s`
        }}
      ></div>
    </div>
  );
};

export default Preloader;