import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  createdDate: "",
  email: "",
  loginType: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, body) => {
      state.auth = true;
      state.createdDate = body.payload.createdDate;
      state.email = body.payload.email;
      state.loginType = body.payload.loginType;
      state.username = body.payload.username;
    },
    logout: (state) => {
      state.auth = false;
      state.createdDate = "";
      state.email = "";
      state.loginType = "";
      state.username = "";
      localStorage.removeItem("token");
    },
  },
});

export default userSlice;
export const { login, logout } = userSlice.actions;
