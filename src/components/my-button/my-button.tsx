import React from 'react';
import styles from './my-button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text label to display on the button */
  label: string;
  /** Click handler function */
  onClick?: () => void;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Visual style variant of the button */
  role?: 'Primary' | 'Secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  type = 'button', 
  onClick, 
  role = 'Primary',
  className,
  ...props 
}) => {
  const buttonClass = role === 'Secondary' ? styles.buttonSecondary : styles.buttonPrimary;
  const combinedClassName = className ? `${buttonClass} ${className}` : buttonClass;
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={combinedClassName}
      {...props}
    >
      {label}
    </button>
  );
};