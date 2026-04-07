import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("setUserInfo") ? JSON.parse(localStorage.getItem("setUserInfo")) : null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = authSlice.actions;
export default authSlice.reducer;
