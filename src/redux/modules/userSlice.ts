import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.auth = false;
    },
  },
});

export default userSlice;
export const { logout } = userSlice.actions;
