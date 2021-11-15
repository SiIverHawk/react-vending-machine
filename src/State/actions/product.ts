import { Dispatch } from "redux";
import { ProductType, ActionProduct } from "../actionTypes/productTypes";

export const loadProducts = (products: IProduct[]) => {
  return (dispatch: Dispatch<ActionProduct>) => {
    dispatch({
      type: ProductType.LOAD_PRODUCTS,
      payload: products,
    });
  };
};

export const setDispatchedProduct = (product: IProduct) => {
  return (dispatch: Dispatch<ActionProduct>) => {
    dispatch({
      type: ProductType.DISPATCH_PRODUCT,
      payload: product,
    });
  };
};
