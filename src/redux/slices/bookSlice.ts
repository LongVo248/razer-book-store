import API from "@/libs/api";
import { Book } from "@/types/book.type";
import { Work } from "@/types/work.type";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SearchBookByGenres } from "@/types/search.param";

interface BookState {
  popularList: Book[];
  isLoadingPopular: boolean;
  totalPage: number;
}

const initialState: BookState = {
  popularList: [],
  isLoadingPopular: false,
  totalPage: 0,
};

export const popular = createAsyncThunk(
  "books/popular",
  async (params: SearchBookByGenres) => {
    const response = await API.book.popular(params);
    return response;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookClear: () => {
      return {
        popularList: [],
        isLoadingPopular: false,
        totalPage: 0,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(popular.fulfilled, (state, action) => {
        state.isLoadingPopular = true;
        console.log("====================================");
        const selectedBook: Book[] = action.payload.data.works.map(
          (work: Work) => {
            return {
              title: work.title,
              image: API.API_PATH.BOOK.COVER + work.cover_id + ".jpg",
              publishYear: work.first_publish_year,
              author: work.authors[0].name,
              id: work.key,
            };
          }
        );
        state.totalPage = Math.round(action.payload.data.work_count / 12);
        console.log(selectedBook);
        state.popularList = selectedBook;
        console.log("====================================");
      })
      .addCase(popular.pending, (state) => {
        state.isLoadingPopular = false;
      })
      .addCase(popular.rejected, (state) => {
        state.isLoadingPopular = false;
      })
      .addDefaultCase((state, action) => {
        console.log(`action type: ${action.type}`, current(state));
      });
  },
});

export const { bookClear } = bookSlice.actions;

export const selectPopularBooks = (state: RootState) => state.book.popularList;
export const getTotalPage = (state: RootState) => state.book.totalPage;
export const getPopularStatus = (state: RootState) =>
  state.book.isLoadingPopular;

const bookReducer = bookSlice.reducer;

export default bookReducer;
