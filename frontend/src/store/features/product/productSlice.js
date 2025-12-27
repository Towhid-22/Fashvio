import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentcategory: "",
  priceRange: { min: 0, max: 10000 },
  productSize: "",
  productColor: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    category: (state, action) => {
      state.currentcategory = action.payload;
    },
    priceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    productSize: (state, action) => {
      state.productSize = action.payload;
    },
    productColor: (state, action) => {
      state.productColor = action.payload;
    },
  },
});

export const { category, priceRange, productSize, productColor } =
  productSlice.actions;
export default productSlice.reducer;
