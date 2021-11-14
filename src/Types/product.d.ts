interface Product {
  id: number;
  name: string;
  preparation_time: number;
  thumbnail: string;
}

interface ProductState {
  availableProducts: Product[];
  dispatchedProducts: object[];
}
