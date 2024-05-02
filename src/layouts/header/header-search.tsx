import Search from "@/components/common/search";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { RootState } from "@/redux/store";
import { useActiveScroll } from "@/libs/hooks/use-active-scroll";
import cn from "classnames";
import React, { useRef } from "react";
import { useSelector } from "react-redux";

type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const HeaderSearch = () => {
  const siteHeaderRef = useRef() as DivElementRef;
  const { displayMobileSearch } = useSelector((state: RootState) => state.ui);
  // const siteSearchRef = useRef() as DivElementRef;
  useActiveScroll(siteHeaderRef, 40);
  // useOnClickOutside(siteSearchRef, () => closeSearch());
  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className={cn(
        "header-two sticky-header sticky top-0 z-20 lg:relative w-full h-16 lg:h-auto",
        displayMobileSearch && "active-mobile-search"
      )}
    >
      <div className="z-20 w-screen transition-all duration-200 ease-in-out innerSticky lg:w-full body-font bg-fill-secondary">
        <Container className="flex items-center justify-between h-16 py-3 top-bar lg:h-auto">
          <Logo className="logo -mt-1.5 md:-mt-1" />
          <Search
            searchId="top-bar-search"
            className="hidden lg:flex lg:max-w-[650px] 2xl:max-w-[800px] lg:ltr:ml-7 lg:rtl:mr-7 lg:ltr:mr-5 lg:rtl:ml-5"
          />
          <div className="flex shrink-0 -mx-2.5 xl:-mx-3.5">
            <div className="items-center hidden lg:flex shrink-0 xl:mx-3.5 mx-2.5 border px-6 py-1 rounded-md bg-brand-tree cursor-pointer">
              <p className=" text-brand-light">Login</p>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default HeaderSearch;
