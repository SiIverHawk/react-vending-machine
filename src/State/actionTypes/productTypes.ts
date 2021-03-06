export enum ProductType {
  DISPATCH_PRODUCT = "DISPATCH_PRODUCT",
  LOAD_PRODUCTS = "LOAD_PRODUCTS",
  PRODUCT_ERROR = "PRODUCT_ERROR",
}

interface ProductDispatch {
  type: ProductType.DISPATCH_PRODUCT;
  payload: IProduct;
}

interface ProductLoad {
  type: ProductType.LOAD_PRODUCTS;
  payload: IProduct[];
}

export type ActionProduct = ProductDispatch | ProductLoad;
