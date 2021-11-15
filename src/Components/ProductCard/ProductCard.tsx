import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../Hooks/useTypeSelector";
import { setDispatchedProduct } from "../../State/actions/product";
import Button from "../../UI/Button/Button";
import classes from "./ProductCard.module.css";

type Props = {
  product: IProduct;
  showButton?: boolean
}

const ProductCard: React.FC<Props> = ({ product: { id, name, preparation_time, thumbnail }, showButton = true }) => {

  const dispatch = useDispatch()
  const [countDown, setCountDown] = useState<number>(preparation_time)
  const [isDispatching, setIsDispatching] = useState(false)
  const { availableProducts } = useTypedSelector(state => state.products)

  const handleDispatchedProducts = useCallback(
    () => {
      const dispatchedProduct = availableProducts.find(product => product.id === id)!;
      dispatch(setDispatchedProduct(dispatchedProduct));
    },
    [availableProducts, dispatch, id],
  );

  useEffect(() => {

    if (isDispatching) {
      const timer = setTimeout(() => {
        if (countDown > 0) {
          setCountDown(countDown - 1)
        }
        else {
          setIsDispatching(false);
          setCountDown(preparation_time);
          handleDispatchedProducts();
        }
      }, 1000);
      return () => {
        clearTimeout(timer)
      }
    }
  }, [countDown, isDispatching, preparation_time, handleDispatchedProducts])

  return (
    <div className={classes.card}>
      <img src={thumbnail} alt={name} className={classes.card__image} />
      <div className={classes.card__body}>
        <h5 className={classes.card__title}>{name}</h5>
      </div>
      <div className={classes.card__footer}>
        {
          showButton &&
          <Button type="button" title={isDispatching ? `Time left: ${countDown}` : 'Dispatch'} onClick={() => { setIsDispatching(!isDispatching) }} disabled={isDispatching} />
        }
      </div>
    </div>
  )
}

export default ProductCard
