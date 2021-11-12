import React, { useEffect, useState } from "react";
import classes from "./Products.module.css";

interface IProducts {
  preparation_time: number
}

const Products: React.FC<IProducts> = ({ preparation_time }) => {

  const [countDown, setCountDown] = useState(preparation_time)
  const [isDispatching, setIsDispatching] = useState(false)

  useEffect(() => {
    if (isDispatching) {
      const timer = setTimeout(() => {
        if (countDown > 0) {
          setCountDown(countDown - 1)
        }
        else {
          setIsDispatching(false);
          setCountDown(preparation_time);
        }
      }, 1000);
      return () => {
        clearTimeout(timer)
      }
    }
  }, [countDown, isDispatching, preparation_time])

  return (
    <div className={classes.card}>
      <img src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg" alt="hamburguer" />
      <div className={classes.card__body}>
        <h5 className={classes.card__title}>Hamburguer</h5>
        <button className={classes.card__button} onClick={() => setIsDispatching(!isDispatching)} disabled={isDispatching}>{isDispatching ? `Time left: ${countDown}` : 'Dispatch'}</button>
      </div>
    </div>
  )
}

export default Products
