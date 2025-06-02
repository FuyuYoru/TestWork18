'use client';

import React from 'react';
import styles from './index.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <input {...props} className={styles.input + ' ' + (props.className || '')} />
    </div>
  );
};


