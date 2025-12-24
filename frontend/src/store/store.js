import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/auth/counterSlice";
import productSlice from "./features/product/productSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      product: productSlice,
    },
  });
};
