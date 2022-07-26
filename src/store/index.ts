import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./modules/cart/reducer";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
