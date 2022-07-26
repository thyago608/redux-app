import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Product } from "./types";
import { addProductToCart } from "./extraReducers";
import { StoreState } from "store/types";

const INITIAL_STATE: CartState = {
  items: [],
};

function handleInStoreProductResearch(productId: number, state: CartState) {
  return state.items.findIndex((item) => item.product.id === productId);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    removeProductToCart(state, action: PayloadAction<number>) {
      const productIndex = handleInStoreProductResearch(action.payload, state);

      const productQuantity = state.items[productIndex].quantity;

      productQuantity > 1
        ? state.items[productIndex].quantity--
        : state.items.splice(productIndex, 1);
    },
    removeProductFromCartForced(state, action: PayloadAction<Product>) {
      const productIndex = handleInStoreProductResearch(
        action.payload.id,
        state
      );

      if (productIndex >= 0) {
        state.items.splice(productIndex, 1);
      }
    },
    removeAllProductsToCart(state) {
      if (state.items.length > 0) {
        state.items.splice(0, state.items.length);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const productIndexCart = handleInStoreProductResearch(
        action.payload.product.id,
        state
      );
      const productStockQuantity = action.payload.stock.quantity;
      const productCartQuantity = state.items[productIndexCart]?.quantity ?? 0;

      if (productIndexCart === -1) {
        state.items.push({
          product: action.payload.product,
          quantity: 1,
        });
      } else if (productCartQuantity < productStockQuantity) {
        state.items[productIndexCart].quantity++;
      }
    });
  },
});

export const {
  removeProductToCart,
  removeAllProductsToCart,
  removeProductFromCartForced,
} = cartSlice.actions;

export const useCartState = (state: StoreState) => state.cart.items;

export default cartSlice.reducer;
