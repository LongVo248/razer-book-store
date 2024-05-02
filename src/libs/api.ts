import {
  SearchBookByGenres,
  SearchParam,
  SearchResponses,
} from "@/types/search.param";
import { SubjectResponse } from "@/types/subject.response.type";
import axios, { AxiosResponse } from "axios";
import { getPopularBooks, searchBooks } from "./helper";
import { BookWork } from "@/types/book-detail";

const API = {
  apiInstance: axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  API_PATH: {
    APP: {
      LOGIN: "/example/login",
    },
    BOOK: {
      SEARCH: "/search.json",
      SUBJECT: "/subjects",
      COVER: "https://covers.openlibrary.org/b/id/",
      WORK: "/",
    },
  },
  app: {
    login: (): Promise<AxiosResponse<void>> => {
      return API.apiInstance.post(API.API_PATH.APP.LOGIN);
    },
  },
  book: {
    popular: async (
      params: SearchBookByGenres
    ): Promise<AxiosResponse<SubjectResponse>> => {
      return await API.apiInstance.get(getPopularBooks(params));
    },
    search: async (
      params: SearchParam
    ): Promise<AxiosResponse<SearchResponses>> => {
      return await API.apiInstance.get(searchBooks(params));
    },
    detail: async (params: string): Promise<AxiosResponse<BookWork>> => {
      return await API.apiInstance.get(
        `${import.meta.env.VITE_API}${params}.json`
      );
    },
  },
};

export default API;
