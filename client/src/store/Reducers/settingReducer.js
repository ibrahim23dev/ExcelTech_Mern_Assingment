import { createSlice } from "@reduxjs/toolkit";
export const settingsReducer = createSlice({
  name: "settings",
  initialState: {
    loader: "d-none",
  },
  reducers: {
    ShowLoader: (state) => {
      state.loader = "";
    },
    HideLoader: (state) => {
      state.loader = "d-none";
    },
  },
});
export const { ShowLoader, HideLoader } = settingsReducer.actions;
export default settingsReducer.reducer;
