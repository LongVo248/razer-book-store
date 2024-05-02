import API from "@/libs/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BookDataDetail } from "@/types/book-detail";

interface BookDetail {
  bookData: BookDataDetail | null;
  isLoading: boolean;
}

const initialState: BookDetail = {
  bookData: null,
  isLoading: false,
};

export const detail = createAsyncThunk(
  "books/detail",
  async (params: string) => {
    const response = await API.book.detail(params);
    return response;
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(detail.fulfilled, (state, action) => {
        state.isLoading = true;
        if (action.payload.data) {
          const result: BookDataDetail = {
            description: action.payload.data.description || "",
            title: action.payload.data.title || "",
            image:
              action.payload.data.covers &&
              action.payload.data.covers.length > 0
                ? String(API.API_PATH.BOOK.COVER) +
                  action.payload.data.covers[0] +
                  ".jpg"
                : "",
            subjectPlaces:
              action.payload.data.subject_places &&
              action.payload.data.subject_places.length > 0
                ? action.payload.data.subject_places[0]
                : "",
            subjectTimes:
              action.payload.data.subject_times &&
              action.payload.data.subject_times.length > 0
                ? action.payload.data.subject_times[0]
                : "",
            subjects:
              action.payload.data.subjects &&
              action.payload.data.subjects.length > 0
                ? action.payload.data.subjects[0]
                : "",
          };
          state.bookData = result;
        } else {
          state.bookData = null;
        }
      })
      .addCase(detail.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(detail.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const getBookDetails = (state: RootState) => state.detail;

const detailReducer = detailSlice.reducer;

export default detailReducer;
