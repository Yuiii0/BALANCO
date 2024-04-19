import { Product } from "./Product.type";

export type Cart = {
  id: number;
  items: CartItem[];
};

export type CartItem = {
  id: number;
  product: Product;
  quantity: number;
  createdAt: number;
  updatedAt: number;
};
