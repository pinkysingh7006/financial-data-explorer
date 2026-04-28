import { createSlice } from "@reduxjs/toolkit";

/**LOADER SLICE */
const initialState = {
  isLoading: false,
};
export const LoaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    loader: (state, param) => {
      const { payload } = param;
      state.isLoading = payload;
    },

    resetLoader: () => initialState,
  },
});

/**ACTION FOR SLICE*/
export const { loader, resetLoader } = LoaderSlice.actions;
