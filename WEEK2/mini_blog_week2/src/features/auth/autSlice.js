import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: false,
  email: null,
  userRole: "guest", // ou "editor" / "admin" pour les défis
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.userRole = action.payload.role;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.email = initialState.email;
      state.isAuth = initialState.isAuth;
      state.userRole = initialState.userRole;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
