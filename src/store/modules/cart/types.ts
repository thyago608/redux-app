export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  priceFormatted: string;
};

export type ProductStock = {
  id: number;
  quantity: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type PayloadActionType = {
  product: Product;
  stock: ProductStock;
};
