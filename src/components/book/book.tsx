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
  const [shareButtonStatus, setShareButtonStatus] = useState<boolean>(false);
  const [productUrl, setProductUrl] = useState<string>("");

  // Set product URL on component mount
  useState(() => {
    setProductUrl(window.location.href);
    console.log("====================================");
    console.log(productUrl);
    console.log("====================================");
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
                  <img
                    src={props.bookData?.image}
                    alt={props.bookData?.title}
                    width={300}
                    height={435}
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
                      shareButtonStatus === true && "text-brand"
                    }`}
                    onClick={handleChange}
                  >
                    <IoArrowRedoOutline className="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all group-hover:text-brand" />
                    {"Share"}
                  </Button>
                  <SocialShareBox
                    className={`absolute z-10 ltr:right-0 rtl:left-0 w-[300px] md:min-w-[400px] transition-all duration-300 ${
                      shareButtonStatus === true
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
