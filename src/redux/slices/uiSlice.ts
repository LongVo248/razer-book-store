import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  displayMobileSearch: boolean;
  displaySearch: boolean;
  displayFilter: boolean;
}

const initialState: UIState = {
  displayMobileSearch: false,
  displaySearch: false,
  displayFilter: false,
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
    openFilter: (state) => {
      state.displayFilter = true;
    },
    closeFilter: (state) => {
      state.displayFilter = false;
    },
    displayFilter: (state) => {
      state.displayFilter = !state.displayFilter;
    },
  },
});

export const {
  toggleMobileSearch,
  closeMobileSearch,
  openMobileSearch,
  openSearch,
  closeSearch,
  openFilter,
  closeFilter,
  displayFilter,
} = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
