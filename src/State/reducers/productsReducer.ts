import { ProductType, ActionProduct } from "../actionTypes/productTypes";

const initialState = {
  availableProducts: [],
  dispatchedProducts: [],
};

export const productsReducer = (
  state: IProductState = initialState,
  action: ActionProduct
): IProductState => {
  switch (action.type) {
    case ProductType.LOAD_PRODUCTS:
      return {
        ...state,
        availableProducts: action.payload,
      };
    case ProductType.DISPATCH_PRODUCT:
      return {
        ...state,
        dispatchedProducts: [...state.dispatchedProducts, action.payload],
      };
    default:
      return state;
  }
};
