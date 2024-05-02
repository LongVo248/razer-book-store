import Heading from "@/components/ui/heading";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  data: {
    id: number;
    widgetTitle: string;
    lists: { id: number; title: string; path: string }[];
  };
}

const WidgetLink: React.FC<Props> = ({ className, data }) => {
  const { widgetTitle, lists } = data;
  return (
    <div className={`${className}`}>
      <Heading variant="mediumHeading" className="mb-4 sm:mb-5 lg:mb-6 pb-0.5">
        {widgetTitle}
      </Heading>
      <ul className="flex flex-col space-y-3 text-sm lg:text-15px">
        {lists.map((list) => (
          <li
            key={`widget-list--key${list.id}`}
            className="flex items-baseline"
          >
            <Link
              to={list.path ? list.path : "#!"}
              className="transition-colors duration-200 hover:text-brand-dark"
            >
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetLink;
