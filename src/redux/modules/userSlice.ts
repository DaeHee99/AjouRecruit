import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  createdDate: "",
  email: "",
  loginType: "",
  username: "",
  id: 0,
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
      state.id = body.payload.id;
    },
    logout: (state) => {
      state.auth = false;
      state.createdDate = "";
      state.email = "";
      state.loginType = "";
      state.username = "";
      state.id = 0;
      localStorage.removeItem("token");
    },
  },
});

export default userSlice;
export const { login, logout } = userSlice.actions;
