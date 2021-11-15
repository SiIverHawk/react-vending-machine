import React from "react"
import classes from './Backdrop.module.css'

const Backdrop: React.FC<IUIBackdropShow> = ({ isOpen, setOpen }) => {
  return (
    <div className={classes.backdrop} onClick={() => setOpen(!isOpen)} />
  )
}

export default Backdrop
