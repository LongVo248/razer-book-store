import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  data: { id: number; path: string; label: string }[];
  className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
  return (
    <nav
      className={cn(
        "headerMenu flex w-full relative -mx-3 xl:-mx-4",
        className
      )}
    >
      {data.map((item) => (
        <div
          className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4"
          key={item.id}
        >
          <Link
            to={item.path}
            className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
          >
            <div>{item.label}</div>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default HeaderMenu;
