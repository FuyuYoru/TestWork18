import React from 'react';
import styles from './index.module.scss';
import { LucideIcon } from 'lucide-react';

type Variant = 'dark' | 'transparent';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label?: string;
  variant?: Variant;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  variant = 'dark',
  ...props
}) => {
  const variantClass = styles[variant] || '';

  return (
    <button className={`${styles.iconButton} ${variantClass}`} {...props}>
      <Icon className={styles.icon} stroke='#d10125'/>
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};
