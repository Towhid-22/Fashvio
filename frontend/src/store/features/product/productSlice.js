import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentcategory: "",
  priceRange: { min: 0, max: 10000 },
  productSize: "",
  productColor: "",
  showingProduct: 0,
  sortProduct: "",
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
    showingProduct: (state, action) => {
      state.showingProduct = action.payload;
    },
    sortProduct: (state, action) => {
      state.sortProduct = action.payload;
    },
  },
});

export const {
  category,
  priceRange,
  productSize,
  productColor,
  showingProduct,
  sortProduct,
} = productSlice.actions;
export default productSlice.reducer;
