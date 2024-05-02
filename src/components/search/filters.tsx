import { Genres } from "@/types/search.param";
import { CategoryFilter } from "./category-filter";

interface FilterProps {
  genres: Genres[];
  handleChooseGenre: (key: string) => void;
}

export const ShopFilters = (props: FilterProps) => {
  const { genres, handleChooseGenre } = props;
  return (
    <div className="space-y-10">
      <CategoryFilter category={genres} handleChooseGenre={handleChooseGenre} />
    </div>
  );
};
