export type SearchParam = {
  q: string;
  page: number;
  limit: number;
};

export type SearchBookByGenres = {
  genres: string;
  page: number;
};

export type Genres = {
  key: string;
  name: string;
};

export type SearchResponses = {
  docs: Doc[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: number;
  q: string;
  start: number;
};

export interface Doc {
  title: string;
  cover_i: number;
  first_publish_year: number;
  author_name: string;
  key: string;
  // Add other properties if needed
}
