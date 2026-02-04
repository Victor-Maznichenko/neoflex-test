import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained-black' | 'contained-yellow' | 'text' | 'unstyled';
}

export const Button = ({
  variant = 'contained-yellow',
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) => (
  <button className={clsx(className, styles.button, styles[variant])} type={type} {...props}>
    {children}
  </button>
);
