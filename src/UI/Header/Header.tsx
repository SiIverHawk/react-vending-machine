import React, { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";
import classes from "./Header.module.css";

const Header: React.FC = () => {

  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false)

  return (
    <>
      <header className={classes.header}>
        <h1>React vending machine</h1>
        <div className={classes.header__anchor_wrapper}>
          <button className={classes.header__anchor} onClick={() => setShowSideDrawer(!showSideDrawer)}>
            Dispatched products
          </button>
        </div>
      </header>
      <SideDrawer isOpen={showSideDrawer} />
      {
        showSideDrawer &&
        <Backdrop isOpen={showSideDrawer} setOpen={setShowSideDrawer} />
      }
    </>
  )
}

export default Header
