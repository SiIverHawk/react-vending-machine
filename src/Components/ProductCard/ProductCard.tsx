import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./ProductCard.module.css";

type Props = {
  product: Product;
  showButton?: boolean
}

const ProductCard: React.FC<Props> = ({ product: { name, preparation_time, thumbnail }, showButton = true }) => {

  const [countDown, setCountDown] = useState<number>(preparation_time)
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
      <img src={thumbnail} alt={name} className={classes.card__image} />
      <div className={classes.card__body}>
        <h5 className={classes.card__title}>{name}</h5>
      </div>
      <div className={classes.card__footer}>
        {
          showButton &&
          // <button className={classes.card__button} onClick={() => setIsDispatching(!isDispatching)} disabled={isDispatching}>{isDispatching ? `Time left: ${countDown}` : 'Dispatch'}</button>
          <Button type="button" title={isDispatching ? `Time left: ${countDown}` : 'Dispatch'} onClick={() => { setIsDispatching(!isDispatching) }} disabled={isDispatching} />
        }
      </div>
    </div>
  )
}

export default ProductCard
