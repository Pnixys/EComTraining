import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.value = action.payload;
    },

    disconnect: (state) => {
      state.value = null;
    },
  },
});

export const { logIn, disconnect } = userSlice.actions;
export const connectedUser = (state: any) => state.user.value;
export default userSlice.reducer;
