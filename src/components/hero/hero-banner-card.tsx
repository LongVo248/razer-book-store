import useWindowSize from "@/libs/hooks/use-window-size";
import cn from "classnames";
import { FC } from "react";
import Search from "../common/search";

interface BannerProps {
  banner: Banner;
  className?: string;
  variant?: "default" | "slider" | "medium";
}

interface Banner {
  id: number;
  title: string;
  description: string;
  searchBox: boolean;
  image: Image;
}

interface Image {
  mobile: {
    url: string;
  };
  desktop: {
    url: string;
  };
}

function getImage(deviceWidth: number, imgObj: Image) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

const HeroBannerCard: FC<BannerProps> = ({
  banner,
  className = "py-20 xy:pt-24",
  variant = "default",
}) => {
  const { width } = useWindowSize();
  const { title, description, image } = banner;
  const selectedImage = getImage(width!, image);
  return (
    <div
      className={cn(
        "w-full bg-fill-thumbnail bg-no-repeat bg-cover bg-center flex items-center",
        {
          "min-h-[420px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[550px]":
            variant === "slider",
        },
        className
      )}
      style={{
        backgroundImage: `url('${selectedImage.url}')`,
      }}
    >
      <div
        className={cn(
          "mx-auto h-full flex flex-col text-center px-6 xl:max-w-[750px] 2xl:max-w-[850px] translate-x-[-400px]",
          {
            "max-w-[480px] md:max-w-[550px]": variant === "default" || "slider",
            "max-w-[480px] md:max-w-[650px]": variant === "medium",
          }
        )}
      >
        <div className="text-center">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-manrope font-extrabold leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3 -mt-2 xl:-mt-3 2xl:-mt-4",
              {
                "text-brand-title xl:text-5xl 2xl:text-[55px]":
                  variant === "default",
                "text-brand-tree-dark xl:text-[40px] 2xl:text-5xl 2xl:mb-4 2xl:pb-0.5":
                  variant === "medium",
                "text-brand-light xl:text-5xl 2xl:text-[55px]":
                  variant === "slider",
              }
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-base md:text-[17px] xl:text-lg leading-7 md:leading-8 xl:leading-[1.92em] xl:px-16",
              {
                "text-brand-dark text-opacity-80 2xl:px-32":
                  variant === "default",
                "text-brand-light 2xl:px-32": variant === "slider",
                "2xl:px-24": variant === "medium",
              }
            )}
          >
            {description}
          </p>
          <div className="hidden lg:flex max-w-[700px] mx-auto md:pt-1 lg:pt-3">
            <Search
              searchId="hero-search"
              className="hidden lg:flex lg:max-w-[650px] 2xl:max-w-[800px] lg:ltr:ml-7 lg:rtl:mr-7 lg:ltr:mr-5 lg:rtl:ml-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerCard;
