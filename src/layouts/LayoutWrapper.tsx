import { ReactNode } from "react";
import LayoutA from "./LayoutA";
import HeaderType from "@/types/header-type";

type LayoutWrapperProps = {
  children: ReactNode;
  headerType?: HeaderType;
};

const LayoutWrapper = (props: LayoutWrapperProps) => {
  const { children, ...restProps } = props;
  return <LayoutA {...restProps}>{children}</LayoutA>;
};

export default LayoutWrapper;
