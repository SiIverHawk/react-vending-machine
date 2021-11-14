import React from "react"
import classes from './Button.module.css'

interface ButtonType {
  type?: "submit" | "reset" | "button";
  title: string;
  disabled?: boolean;
  onClick: () => void
}

const Button: React.FC<ButtonType> = ({ type, title, disabled = false, onClick }) => {
  return (
    <button type={type} className={classes.btn} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button
