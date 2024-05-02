import { Genres } from "@/types/search.param";
import Heading from "../ui/heading";
import CategoryFilterMenu from "./category-filter-menu";

export const CategoryFilter = ({
  category,
  handleChooseGenre,
}: {
  category: Genres[];
  handleChooseGenre: (key: string) => void;
}) => {
  return (
    <div className="block">
      <Heading className="mb-5 -mt-1">Book by Genres</Heading>
      <div className="max-h-full overflow-hidden rounded border border-border-base">
        <div className="w-full">
          {category?.length ? (
            <CategoryFilterMenu
              items={category}
              handleChooseGenre={handleChooseGenre}
            />
          ) : (
            <div className="min-h-full pt-6 pb-8 px-9 lg:p-8">
              {"text-no-results-found"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
