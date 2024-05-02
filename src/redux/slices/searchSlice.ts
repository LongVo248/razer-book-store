import API from "@/libs/api";
import { Book } from "@/types/book.type";
import { Doc, SearchParam } from "@/types/search.param";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Search {
  searchBookList: Book[];
  searchText: string;
  isLoading: boolean;
  totalPage: number;
}

const initialState: Search = {
  searchBookList: [],
  searchText: "",
  isLoading: false,
  totalPage: 0,
};

export const search = createAsyncThunk(
  "books/search",
  async (params: SearchParam) => {
    const response = await API.book.search(params);
    return response;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(search.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(search.fulfilled, (state, action) => {
      console.log("====================================");
      console.log(action);
      console.log("====================================");
      state.isLoading = true;
      const selectedBook: Book[] = action.payload.data.docs.map((doc: Doc) => {
        return {
          title: doc.title,
          image: API.API_PATH.BOOK.COVER + doc.cover_i + ".jpg",
          publishYear: doc.first_publish_year,
          author: doc.author_name,
          id: doc.key,
        };
      });
      state.searchBookList = selectedBook;
      state.totalPage = Math.round(action.payload.data.numFound / 12);
    });
    builder.addCase(search.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setSearchText } = searchSlice.actions;

export const selectSearchBook = (state: RootState) =>
  state.search.searchBookList;

export const getSearchStatus = (state: RootState) => state.search.isLoading;
export const getSearchTotalPage = (state: RootState) => state.search.totalPage;
export const getSearchText = (state: RootState) => state.search.searchText;

const searchReducer = searchSlice.reducer;

export default searchReducer;
