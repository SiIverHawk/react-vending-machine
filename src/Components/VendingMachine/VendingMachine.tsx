import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../Hooks/useFetch";
import { useTypedSelector } from "../../Hooks/useTypeSelector";
import { loadProducts } from "../../State/actions/product";
import Loading from "../../UI/Loading/Loading";
import Modal from "../../UI/Modal/Modal";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./VendingMachine.module.css";

const VendingMachine: React.FC = () => {

  const dispatch = useDispatch();
  const { response, loading, error, setReloading } = useFetch({ url: 'https://vending-machine-test.vercel.app/api/products' });
  const { availableProducts } = useTypedSelector(state => state.products)

  useEffect(() => {
    dispatch(loadProducts(response))
  }, [response, dispatch]);

  const handleModal = () => {
    error ? setReloading(true) : setReloading(false);
  }

  return (
    <main className={classes.content}>
      {
        loading ? (<Loading />)
          : (
            <>
              {
                error ?
                  (
                    <Modal title='Something happened' message={error} onClickAction={handleModal} />
                  )
                  : (
                    <>
                      <h1>Available Products</h1>
                      <div className={classes.wrapper}>
                        {
                          availableProducts.map((product: IProduct) => (
                            <ProductCard key={product.id} product={product} />
                          ))
                        }
                      </div>
                    </>
                  )
              }

            </>
          )
      }
    </main >
  )
}

export default VendingMachine
