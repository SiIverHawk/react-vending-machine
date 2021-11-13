import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../Hooks/useFetch";
import { useTypedSelector } from "../../Hooks/useTypeSelector";
import { loadProducts } from "../../State/actions/product";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./VendingMachine.module.css";

const VendingMachine: React.FC = () => {

  const { response, loading } = useFetch({ url: 'https://vending-machine-test.vercel.app/api/products' });

  const dispatch = useDispatch();
  const { availableProducts } = useTypedSelector(state => state.products)

  useEffect(() => {
    if (response.length) dispatch(loadProducts(response))
  }, [response, dispatch]);

  return (
    <main className={classes.content}>
      {
        loading ? (<h1>Loading...</h1>)
          : (
            <>
              <h1>Available Products</h1>
              <div className={classes.wrapper}>
                {
                  availableProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                }
              </div>
            </>
          )
      }
    </main >
  )
}

export default VendingMachine
