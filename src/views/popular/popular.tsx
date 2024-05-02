import BookGrid from "@/components/book/book-grid";
import { ShopFilters } from "@/components/search/filters";
import Container from "@/components/ui/container";
import LayoutA from "@/layouts/LayoutA";
import {
  getPopularStatus,
  getTotalPage,
  popular,
  selectPopularBooks,
} from "@/redux/slices/bookSlice";
import { useAppDispatch } from "@/redux/store";
import HeaderType from "@/types/header-type";
import { Genres } from "@/types/search.param";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Popular() {
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState("love");
  const dispatch = useAppDispatch();
  const bookList = useSelector(selectPopularBooks);
  const loading = useSelector(getPopularStatus);
  const totalPage = useSelector(getTotalPage);
  const navigate = useNavigate();

  const genres: Genres[] = [
    { key: "love", name: "All Genres" },
    { key: "business", name: "Business" },
    { key: "science", name: "Science" },
    { key: "fiction", name: "Fiction" },
    { key: "philosophy", name: "Philosophy" },
    { key: "biography", name: "Biography" },
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlGenre = urlParams.get("genres") ?? "love";
    const urlPage = parseInt(urlParams.get("page") ?? "1");
    setGenre(urlGenre);
    setCurrentPage(urlPage);
  }, []);

  useEffect(() => {
    const promise = dispatch(popular({ genres: genre, page: currentPage }));
    return () => {
      promise.abort();
    };
  }, [currentPage, dispatch, genre]);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
    navigate(`/popular/?genres=${genre}&page=${page}`);
  };

  const handleChooseGenre = (key: string) => {
    setGenre(key);
    setCurrentPage(1);
    navigate(`/popular/?genres=${key}&page=${currentPage}`);
  };

  return (
    <LayoutA headerType={HeaderType.SEARCH}>
      <Container>
        <div id="grid" className="flex pb-16 pt-7 lg:pt-7 lg:pb-20">
          <div className="hidden sticky h-full lg:pt-4 shrink-0 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 lg:block w-80 xl:w-96 top-16">
            <ShopFilters
              genres={genres}
              handleChooseGenre={handleChooseGenre}
            />
          </div>
          <div className="w-full lg:pt-4 lg:ltr:-ml-4 lg:rtl:-mr-2 xl:ltr:-ml-8 xl:rtl:-mr-8 lg:-mt-1">
            {/* <div>Search Top Bar</div> */}
            <div>
              <BookGrid data={bookList} loading={loading} />
              {loading && (
                <div className="flex justify-center mt-10">
                  <Pagination
                    current={currentPage}
                    onChange={onChange}
                    total={totalPage}
                    showSizeChanger={false}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </LayoutA>
  );
}
