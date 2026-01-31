import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
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
