import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./types";

export const addProductToCart = createAsyncThunk(
  "cart/fetchStock",
  async (product: Product) => {
    const stock = await fetch(`http://localhost:3333/stock/${product.id}`);

    return { product, stock: await stock.json() };
  }
);
