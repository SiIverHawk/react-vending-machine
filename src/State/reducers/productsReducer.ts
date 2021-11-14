import { ProductType, ActionProduct } from "../actionTypes/productTypes";

const initialState = {
  availableProducts: [],
  dispatchedProducts: [],
};

export const productsReducer = (
  state: ProductState = initialState,
  action: ActionProduct
): ProductState => {
  switch (action.type) {
    case ProductType.LOAD_PRODUCTS:
      return {
        ...state,
        availableProducts: action.payload,
      };
    default:
      return state;
  }
};
