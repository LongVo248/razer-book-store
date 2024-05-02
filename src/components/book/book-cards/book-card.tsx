import { Book } from "@/types/book.type";
import cn from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BookProps {
  book: Book;
  className?: string;
}

const BookCard: React.FC<BookProps> = ({ book, className }) => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  function handleClickBookDetail() {
    navigate(`/book/?id=${book.id.split("/")[2]}&author=${book.author}`);
  }

  return (
    <article
      className={cn(
        "flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full",
        className
      )}
      onClick={handleClickBookDetail}
    >
      <div className="relative shrink-0">
        <div className="flex justify-center overflow-hidden max-w-[230px] mx-auto transition duration-200 ease-in-out transform group-hover:scale-110 relative">
          {loaded ? null : (
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-brand"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                ></path>
              </svg>
            </div>
          )}
          <img
            src={book.image}
            alt={book.title || "Book Image"}
            loading="lazy"
            className="bg-fill-thumbnail object-cover w-[140px] h-[210px]"
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
          <div className="block product-count-button-position"></div>
        </div>
      </div>

      <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
        <div className="mb-1 lg:mb-1.5 -mx-1">
          <span
            title={book.title}
            className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark w-full"
          >
            {book.title}
          </span>
        </div>
        <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5 ">
          by <span className="font-[500]">{book.author}</span>
        </h2>
        <div className="mt-auto text-13px sm:text-sm font-[500]">
          {book.publishYear}
        </div>
      </div>
    </article>
  );
};

export default BookCard;