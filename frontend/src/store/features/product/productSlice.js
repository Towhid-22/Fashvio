import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentcategory: "",
  priceRange: { min: 0, max: 10000 },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    category: (state, action) => {
      state.currentcategory = action.payload;
    },
    price: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { category, price } = productSlice.actions;
export default productSlice.reducer;
