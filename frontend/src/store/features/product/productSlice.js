import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentcategory: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    category: (state, action) => {
      state.currentcategory = action.payload;
    },
  },
});

export const { category } = productSlice.actions;
export default productSlice.reducer;
