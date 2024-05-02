import { Genres } from "@/types/search.param";
import cn from "classnames";

const CategoryFilterMenu = ({
  items,
  className,
  handleChooseGenre,
}: {
  items: Genres[];
  className?: string;
  handleChooseGenre: (key: string) => void;
}) => {
  return (
    <ul className={cn(className)}>
      {items?.map((item, id) => (
        <li
          key={id}
          className="flex justify-between items-center transition cursor-pointer  text-sm md:text-15px hover:bg-fill-base border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3"
        >
          <button
            className={cn(
              "flex items-center w-full ltr:text-left rtl:text-right group"
            )}
            onClick={() => handleChooseGenre(item.key)}
          >
            <span className="text-brand-dark capitalize py-0.5">
              {item.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilterMenu;
