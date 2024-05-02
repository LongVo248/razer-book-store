import React, { useState } from "react";
import { BookDataDetail } from "@/types/book-detail";
import Button from "../ui/button";
import { IoArrowRedoOutline } from "react-icons/io5";
import SocialShareBox from "../ui/social-share-box";

type DetailProps = {
  bookData: BookDataDetail | null;
  isLoading: boolean;
  author: string;
};

const ProductSingleDetails = (props: DetailProps) => {
  const [loaded, setLoaded] = useState(false);
  const [shareButtonStatus, setShareButtonStatus] = useState<boolean>(false);
  const [productUrl, setProductUrl] = useState<string>("");

  // Set product URL on component mount
  useState(() => {
    setProductUrl(window.location.href);
  });

  const handleChange = () => {
    setShareButtonStatus(!shareButtonStatus);
  };
  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10 bg-[#F5F5F5]">
      <div className="pt-6 pb-2 md:pt-7">
        <div className="grid-cols-10 lg:grid gap-7 2xl:gap-8">
          <div className="col-span-5 mb-6 overflow-hidden xl:col-span-6 md:mb-8 lg:mb-0">
            <div className="w-full xl:flex">
              <div className="w-full xl:ltr:ml-5 xl:rtl:mr-5 mb-2.5 md:mb-3 border border-border-base overflow-hidden rounded-md relative xl:w-[700px] 2xl:w-[900px]">
                <div className="flex items-center justify-center w-auto">
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
                    src={props.bookData?.image}
                    alt={props.bookData?.title}
                    width={300}
                    height={435}
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-5 shrink-0 xl:col-span-4 xl:ltr:pl-2 xl:rtl:pr-2">
            <div className="pb-3 lg:pb-5">
              <div className="md:mb-2.5 block -mt-1.5">
                <h2 className="text-lg font-medium transition-colors duration-300 text-brand-dark md:text-xl xl:text-2xl">
                  {props.bookData?.title}
                </h2>
              </div>
              <div className="flex items-center mt-5">
                <span>by &nbsp;</span>
                <div className="text-brand-dark font-bold text-base md:text-xl xl:text-[16px]">
                  {props.author}
                </div>
              </div>
            </div>
            <div className="mb-2 pt-0.5">
              <div className="mb-3 font-normal capitalize text-15px text-opacity-70">
                Time :&nbsp;
                <span className="text-brand-dark font-bold text-base md:text-xl xl:text-[16px]">
                  {props.bookData?.subjectTimes}
                </span>
              </div>
              <div className="mb-3 font-normal capitalize text-15px text-opacity-70">
                Place :&nbsp;
                <span className="text-brand-dark font-bold text-base md:text-xl xl:text-[16px]">
                  {props.bookData?.subjectPlaces}
                </span>
              </div>
            </div>
            <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
              <div className="grid grid-cols-1 gap-2.5">
                <div className="relative group">
                  <Button
                    variant="border"
                    className={`w-full hover:text-brand ${
                      shareButtonStatus && "text-brand"
                    }`}
                    onClick={handleChange}
                  >
                    <IoArrowRedoOutline className="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all group-hover:text-brand" />
                    {"Share"}
                  </Button>
                  <SocialShareBox
                    className={`absolute z-10 ltr:right-0 rtl:left-0 w-[300px] md:min-w-[400px] transition-all duration-300 ${
                      shareButtonStatus
                        ? "visible opacity-100 top-full"
                        : "opacity-0 invisible top-[130%]"
                    }`}
                    shareUrl={productUrl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:px-2 py-11 lg:py-14 xl:py-16 sm:px-0">
          <div className="block border-b border-border-base">
            <button className="text-15px lg:text-17px leading-5 text-brand-dark font-semibold">
              Book Detail
            </button>
          </div>
          <div className="mt-6 lg:mt-9">
            <div className="text-sm sm:text-15px text-brand-muted leading-[2em] space-y-4 lg:space-y-5 xl:space-y-7 mb-10">
              {props.bookData?.description}
            </div>
            <div className="text-sm sm:text-15px text-brand-muted leading-[2em] space-y-4 lg:space-y-5 xl:space-y-7">
              Subject: &nbsp;
              <span className="text-brand-dark font-semibold">
                {" "}
                {props.bookData?.subjects}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingleDetails;
