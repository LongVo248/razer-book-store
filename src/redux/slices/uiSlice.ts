import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  displayMobileSearch: boolean;
  displaySearch: boolean;
}

const initialState: UIState = {
  displayMobileSearch: false,
  displaySearch: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileSearch: (state) => {
      state.displayMobileSearch = !state.displayMobileSearch;
    },
    closeMobileSearch: (state) => {
      state.displayMobileSearch = false;
    },
    openMobileSearch: (state) => {
      state.displayMobileSearch = true;
    },
    openSearch: (state) => {
      state.displaySearch = true;
    },
    closeSearch: (state) => {
      state.displaySearch = false;
    },
  },
});

export const {
  toggleMobileSearch,
  closeMobileSearch,
  openMobileSearch,
  openSearch,
  closeSearch,
} = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
