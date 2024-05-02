import HeaderType from "@/types/header-type";
import { Layout } from "antd";
import { ReactNode } from "react";
import Header from "@/layouts/header/header";
import Footer from "./footer/footer";
import HeaderSearch from "./header/header-search";
import BottomNavigation from "./mobile-navigation/mobile-navigation";
const { Content } = Layout;

type LayoutAProps = {
  children: ReactNode;
  headerType?: HeaderType;
};

const LayoutA = (props: LayoutAProps) => {
  const { children, headerType } = props;

  const renderHeader = () => {
    if (headerType === HeaderType.SEARCH) {
      return <HeaderSearch />;
    } else if (headerType === HeaderType.DEFAULT) {
      return <Header />;
    }
    return;
  };

  const renderFooter = () => {
    if (headerType === HeaderType.DEFAULT || headerType === HeaderType.SEARCH) {
      return <Footer />;
    }
    return;
  };

  return (
    <Layout>
      {renderHeader()}
      <Content
        className="bg-brand-light relative flex-grow"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </Content>
      {renderFooter()}
      <BottomNavigation />
    </Layout>
  );
};

export default LayoutA;
