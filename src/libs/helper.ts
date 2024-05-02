import { SearchBookByGenres, SearchParam } from "@/types/search.param";
import API from "./api";

export function getPopularBooks(data: SearchBookByGenres): string {
  const offset = String((Number(data.page) - 1) * 12);
  return `${API.API_PATH.BOOK.SUBJECT}/${data.genres}.json?offset=${offset}`;
}

export function searchBooks(data: SearchParam): string {
  return `${API.API_PATH.BOOK.SEARCH}?q=${data.q}&page=${data.page}&limit=12`;
}
