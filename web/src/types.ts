export interface Products {
  id: number;
  description: string;
  date: string;
  imgUrl: string;
  name: string;
  price: number;
  rateAverage: number;
  priceFormatted: string;
  categories: Array<Categories>;
  amount: number;
}

export interface Categories {
  id: number;
  name: string;
}

export interface Stock {
  id: number;
  amount: number;
}
