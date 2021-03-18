import React from 'react';
import styles from './Icon.module.scss';

const Icon = ({ name, className }) => {
  if (!name) {
    return null;
  }
  return (
    <svg className={`${styles.icon} ${className}`} fill="currentColor">
      <use xlinkHref={`/icons/${name}.svg#${name}`} />
    </svg>
  );
};

export default Icon;
