import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: React.ReactNode;
  disabled?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  onClick?: () => void;
}