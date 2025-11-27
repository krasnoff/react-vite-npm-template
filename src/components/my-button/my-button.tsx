// import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button {...rest}>
      {label}
    </button>
  )
}