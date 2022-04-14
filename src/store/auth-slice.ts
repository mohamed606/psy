import { createSlice } from "@reduxjs/toolkit";

const initialAuth: {
  token: string;
  isLoggedIn: boolean;
} = {
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    login(state, action) {
      const token = action.payload;
      state.token = token;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

