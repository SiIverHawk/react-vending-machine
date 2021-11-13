import { ProductType, ActionProduct } from "../actionTypes/productTypes";

const initialState = {
  availableProducts: [],
  dispatchedProducts: []
};

export const productsReducer = (
  state: ProductState = initialState,
  Product: ActionProduct
): ProductState => {
  switch (Product.type) {
    case ProductType.LOAD_PRODUCTS:
      return {
        ...state,
        availableProducts: Product.payload,
      };
    default:
      return state;
  }
};
