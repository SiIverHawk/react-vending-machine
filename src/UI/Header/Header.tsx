import React from "react";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes['main-header']}>
      <h1>React vending machine</h1>
    </header>
  )
}

export default Header
