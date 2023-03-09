import { createSlice } from "@reduxjs/toolkit";
import User from "../../Models/User";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    logIn: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },

    disconnect: (state) => {
      state.user = null;
    },
  },
});

export const { logIn, disconnect } = userSlice.actions;
export const connectedUser = (state: any) => state.user.value;
export default userSlice.reducer;
