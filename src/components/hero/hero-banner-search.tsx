import React, { useState } from "react";
import SearchIcon from "../icons/search-icon";

const HeroSearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <form
      className="relative flex w-full mt-6 rounded-md"
      noValidate
      role="search"
      onSubmit={onSubmit}
    >
      <label htmlFor="hero-search" className="flex flex-1 items-center py-0.5">
        <input
          id="hero-search"
          placeholder="What are you looking ..."
          className="w-full text-sm transition-all duration-200 outline-none text-brand-dark/80 h-14 ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 md:h-16 shadow-heroSearch placeholder:text-brand-dark/50 rounded-md lg:text-base focus:ring-2 focus:ring-brand"
          aria-label="Search"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button
        type="submit"
        title="Search"
        className="absolute top-0 flex items-center justify-center h-full transition duration-200 ease-in-out outline-none ltr:right-0 rtl:left-0 w-14 md:w-16 hover:text-heading focus:outline-none"
      >
        <SearchIcon className="w-5 h-5 text-brand-dark text-opacity-40" />
      </button>
    </form>
  );
};

export default HeroSearchBox;
