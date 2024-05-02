import Container from "@/components/ui/container";
import React from "react";
import WidgetAbout from "./widget-about";
import { footer } from "../data";
import WidgetLink from "./widget-link";
import WidgetSubscription from "./widget-subcription";

interface WidgetsProps {
  widgets: {
    id: number;
    widgetTitle: string;
    lists: { id: number; title: string; path: string }[];
  }[];
}

const Widgets: React.FC<WidgetsProps> = ({ widgets }) => {
  const { social } = footer;
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px]">
        <WidgetAbout
          social={social}
          className="mb-4 border-b col-span-full sm:col-span-1 md:col-span-3 sm:border-b-0 border-border-three sm:mb-0"
        />
        {widgets?.map((widget) => (
          <WidgetLink
            key={widget.id}
            data={widget}
            className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2"
          />
        ))}
        <WidgetSubscription className="pt-8 border-t col-span-full sm:col-span-1 md:col-start-4 xl:col-start-auto md:col-span-4 xl:col-span-3 2xl:ltr:pl-7 2xl:rtl:pr-7 3xl:ltr:pl-16 3xl:rtl:pr-16 sm:pt-0 sm:border-t-0 border-border-three " />
      </div>
    </Container>
  );
};

export default Widgets;
