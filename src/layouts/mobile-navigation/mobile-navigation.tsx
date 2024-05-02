import CartIcon from "@/components/icons/cart-icon";
import HomeIcon from "@/components/icons/home-icon";
import MenuIcon from "@/components/icons/menu-icon";
import SearchIcon from "@/components/icons/search-icon";
import UserIcon from "@/components/icons/user-icon";

const BottomNavigation = () => {
  return (
    <>
      <div className="lg:hidden fixed z-30 -bottom-0.5 bg-brand-light shadow-bottomNavigation flex items-center justify-between w-full h-14 px-4 md:px-6 lg:px-8 text-brand-muted pb-0.5">
        <button
          aria-label="Menu"
          className="flex flex-col items-center justify-center outline-none shrink-0 focus:outline-none"
        >
          <MenuIcon />
        </button>
        <button className="relative flex items-center justify-center h-auto shrink-0 focus:outline-none">
          <SearchIcon />
        </button>
        <button>
          <HomeIcon />
        </button>
        <button>
          <CartIcon />
        </button>
        <button>
          <UserIcon />
        </button>
      </div>
    </>
  );
};

export default BottomNavigation;
