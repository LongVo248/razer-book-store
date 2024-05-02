import Container from "@/components/ui/container";
import { siteSettings } from "@/settings/site-settings";
import React, { useRef } from "react";
import HeaderMenu from "./header-menu";
import MenuIcon from "@/components/icons/menu-icon";
import Logo from "@/components/ui/logo";
import { useActiveScroll } from "@/libs/hooks/use-active-scroll";

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;

const Header: React.FC = () => {
  const siteHeaderRef = useRef() as DivElementRef;
  useActiveScroll(siteHeaderRef);
  function handleMobileMenu() {
    return null;
  }

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="header-one w-full bg-brand-light h-16 z-30 sticky top-0 lg:h-20"
    >
      <div className="z-20 w-full h-16 transition duration-200 ease-in-out innerSticky body-font bg-brand-light lg:h-20">
        <Container className="flex items-center justify-between w-full h-full">
          <div className="flex shrink-0">
            <button
              aria-label="Menu"
              className="flex-col items-center justify-center hidden outline-none menuBtn ltr:mr-5 rtl:ml-5 lg:flex xl:hidden shrink-0 focus:outline-none"
              onClick={handleMobileMenu}
            >
              <MenuIcon />
            </button>
            <Logo className="-mt-1" />
          </div>

          <HeaderMenu
            data={site_header.menu}
            className="hidden xl:flex md:ltr:pl-6 md:rtl:pr-6 xl:ltr:pl-10 xl:rtl:pr-10"
          />
          <div className="flex shrink-0 -mx-2.5 xl:-mx-3.5">
            <div className="items-center hidden lg:flex shrink-0 xl:mx-3.5 mx-2.5  border px-6 py-1 rounded-md bg-brand-tree cursor-pointer">
              <p className="text-brand-light">Login</p>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
