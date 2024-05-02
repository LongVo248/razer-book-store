export type Work = {
  authors: Author[];
  cover_edition_key: number;
  cover_id: number;
  edition_count: number;
  first_publish_year: number;
  has_fulltext: boolean;
  ia: string;
  ia_collection: [];
  key: string;
  title: string;
  subject: [];
  lendinglibrary: boolean;
  printdisabled: boolean;
  lending_edition: string;
  lending_identifier: string;
  public_scan: boolean;
  availability?: string;
};

export type Author = {
  key: string;
  name: string;
};
