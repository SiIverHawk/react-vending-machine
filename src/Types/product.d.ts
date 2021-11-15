interface IProduct {
  id: number;
  name: string;
  preparation_time: number;
  thumbnail: string;
}

interface IProductState {
  availableProducts: IProduct[];
  dispatchedProducts: IProduct[];
}
