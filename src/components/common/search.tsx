import { search, setSearchText } from "@/redux/slices/searchSlice";
import { closeMobileSearch, closeSearch } from "@/redux/slices/uiSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import cn from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBox from "./search-box";

type Props = {
  className?: string;
  searchId?: string;
  variant?: "border" | "fill";
};

const Search = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className = "md:w-[730px] 2xl:w-[800px]",
      searchId = "search",
      variant = "border",
    },
    ref
  ) => {
    const { displayMobileSearch, displaySearch } = useSelector(
      (state: RootState) => state.ui
    );
    const [searchInput, setSearchInput] = useState("");
    const [inputFocus, setInputFocus] = useState<boolean>(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    function handleSearch(e: React.SyntheticEvent) {
      e.preventDefault();
      dispatch(setSearchText(searchInput));
      dispatch(search({ q: searchInput, limit: 12, page: 1 }));
      navigate(`/search/?q=${searchInput}&page=${1}`);
    }
    function handleAutoSearch(e: React.FormEvent<HTMLInputElement>) {
      setSearchInput(e.currentTarget.value);
    }

    function clear() {
      setSearchInput("");
      setInputFocus(false);
      dispatch(closeMobileSearch());
      dispatch(closeSearch());
    }

    function enableInputFocus() {
      setInputFocus(true);
    }

    return (
      <div
        ref={ref}
        className={cn(
          "w-full transition-all duration-200 ease-in-out",
          className
        )}
      >
        <div
          className={cn(
            "overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed",
            {
              open: displayMobileSearch,
              "input-focus-overlay-open": inputFocus === true,
              "open-search-overlay": displaySearch,
            }
          )}
          onClick={() => clear()}
        />
        <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
          <div className="flex flex-col w-full mx-auto">
            <SearchBox
              searchId={searchId}
              name="search"
              value={searchInput}
              onSubmit={handleSearch}
              onChange={handleAutoSearch}
              onClear={clear}
              onFocus={() => enableInputFocus()}
              variant={variant}
            />
          </div>
        </div>
      </div>
    );
  }
);

Search.displayName = "Search";
export default Search;
