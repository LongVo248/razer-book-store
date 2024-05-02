import ProductSingleDetails from "@/components/book/book";
import Container from "@/components/ui/container";
import LayoutA from "@/layouts/LayoutA";
import { detail, getBookDetails } from "@/redux/slices/detailSlice";
import { useAppDispatch } from "@/redux/store";
import HeaderType from "@/types/header-type";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BookDetail() {
  const dispatch = useAppDispatch();
  const bookDetail = useSelector(getBookDetails);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const bookWorkId = searchParams.has("id") ? searchParams.get("id") : null;
    const author = searchParams.has("author")
      ? searchParams.get("author")
      : null;
    if (author) {
      setAuthor(author);
    }
    console.log("====================================");
    console.log(author);
    console.log("====================================");

    if (bookWorkId) {
      dispatch(detail(`/works/${bookWorkId}`));
    }
  }, [dispatch]);

  return (
    <LayoutA headerType={HeaderType.SEARCH}>
      <div className="py-6 lg:pt-7 ">
        <Container>
          <ProductSingleDetails
            bookData={bookDetail.bookData}
            isLoading={bookDetail.isLoading}
            author={author}
          />
        </Container>
      </div>
    </LayoutA>
  );
}
