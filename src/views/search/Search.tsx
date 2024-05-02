import BookGrid from "@/components/book/book-grid";
import Container from "@/components/ui/container";
import LayoutA from "@/layouts/LayoutA";
import {
  getSearchStatus,
  getSearchText,
  getSearchTotalPage,
  search,
  selectSearchBook,
} from "@/redux/slices/searchSlice";
import { useAppDispatch } from "@/redux/store";
import HeaderType from "@/types/header-type";
import { Pagination, PaginationProps } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const searchList = useSelector(selectSearchBook);
  const searchText = useSelector(getSearchText);
  const loading = useSelector(getSearchStatus);
  const totalPage = useSelector(getSearchTotalPage);
  const navigate = useNavigate();

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
    navigate(`/search/?q=${searchText}&page=${page}`);
  };

  useEffect(() => {
    const promise = dispatch(
      search({ q: searchText, limit: 12, page: currentPage })
    );
    return () => {
      promise.abort();
    };
  }, [currentPage, dispatch, searchText]);

  return (
    <LayoutA headerType={HeaderType.SEARCH}>
      <Container>
        <div id="grid" className="flex pb-16 pt-7 lg:pt-7 lg:pb-20">
          <div className="w-full lg:pt-4 lg:ltr:-ml-4 lg:rtl:-mr-2 xl:ltr:-ml-8 xl:rtl:-mr-8 lg:-mt-1">
            {/* <div>Search Top Bar</div> */}
            <div>
              <BookGrid data={searchList} loading={loading} />
              <div className="flex justify-center mt-10">
                <Pagination
                  current={currentPage}
                  onChange={onChange}
                  total={totalPage}
                  showSizeChanger={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </LayoutA>
  );
}
