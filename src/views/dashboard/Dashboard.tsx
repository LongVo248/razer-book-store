import HeroBannerCard from "@/components/hero/hero-banner-card";
import LayoutA from "@/layouts/LayoutA";
import { homeSixHeroBanner as heroBanner } from "@/libs/static/banner";
import HeaderType from "@/types/header-type";

const Dashboard = () => {
  return (
    <LayoutA headerType={HeaderType.DEFAULT}>
      <section className="relative flex-grow">
        <HeroBannerCard
          banner={heroBanner}
          className="hero-banner-six min-h-[400px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[650px] py-20 py:pt-24 mb-5 2xl:bg-center"
        />
      </section>
    </LayoutA>
  );
};

export default Dashboard;
