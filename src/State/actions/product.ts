import { Dispatch } from "redux";
import { ProductType, ActionProduct } from "../actionTypes/productTypes";

export const loadProducts = (products: Product[]) => {
  
  return async (dispatch: Dispatch<ActionProduct>) => {
    dispatch({
      type: ProductType.LOAD_PRODUCTS,
      payload: products,
    });
  };
};
