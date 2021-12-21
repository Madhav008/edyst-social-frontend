import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {
    name: "",
    email: "",
    token: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, email, token } = action.payload;
      state.isAuth = true;
      state.user.name = name;
      state.user.email = email;
      state.user.token = token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
