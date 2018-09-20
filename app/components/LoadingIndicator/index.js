import React from 'react';
import styles from './styles/index.scss';

const LoadingIndicator = () => (
  <div className={`${styles.loaderWrapper}`}>
    <div className={`${styles.loader}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default LoadingIndicator;
