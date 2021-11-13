export enum ProductType {
  DISPATCH_PRODUCT = "DISPATCH_PRODUCT",
  LOAD_PRODUCTS = "LOAD_PRODUCTS",
}

interface ProductDispatch {
  type: ProductType.DISPATCH_PRODUCT;
}

interface ProductLoad {
  type: ProductType.LOAD_PRODUCTS;
  payload: Product [];
}

export type ActionProduct = ProductDispatch | ProductLoad