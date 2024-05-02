import cn from "classnames";
import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
  el?: keyof JSX.IntrinsicElements;
  clean?: boolean;
}

const Container: React.FC<Props> = ({
  children,
  className,
  el = "div",
  clean,
}) => {
  const Component = el || "div";
  return (
    <Component
      className={cn(
        className,
        "mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10"
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
