// import React from 'react'
import styles from './my-button.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
  onClick?: () => void,
  type?: 'button' | 'submit' | 'reset',
  role?: 'Primary' | 'Secondary',
}

export const Button: React.FC<ButtonProps> = ({ label, type, onClick, role }) => {
  return (
    <button type={type || 'button'} onClick={onClick} className={role === 'Secondary' ? styles.buttonSecondary : styles.buttonPrimary}>
      {label}
    </button>
  )
}