import { Book } from "@/types/book.type";
import BookCardLoader from "@/components/ui/loaders/book-card-loader";
import BookCard from "./book-cards/book-card";

interface BookGridProps {
  data: Book[];
  className?: string;
  loading?: boolean;
}

const BookGrid: React.FC<BookGridProps> = ({ data, loading }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 gap-6 md:gap-4 2xl:gap-5">
        {/* <div className="col-span-full">
          <Alert message={"Error"} />
        </div> */}
        {!loading &&
          Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx}>
              <BookCardLoader />
            </div>
          ))}
        {loading &&
          data.map((book, id) => (
            <div key={id}>
              <BookCard book={book} />
            </div>
          ))}
      </div>
    </>
  );
};

export default BookGrid;
