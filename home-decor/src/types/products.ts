export interface IPrice {
  amount: string;
  formatted: string;
}

export interface IProduct {
  id: number;
  images?: string[];
  title: string;
  description?: string;
  price: IPrice;
  categoryId?: string;
}
