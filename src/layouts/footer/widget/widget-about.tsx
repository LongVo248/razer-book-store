import Logo from "@/components/ui/logo";
import Text from "@/components/ui/text";
import { Link } from "react-router-dom";

interface AboutProps {
  className?: string;
  social?: {
    id: string | number;
    path?: string;
    name: string;
    image: string;
    width: number;
    height: number;
  }[];
}
const WidgetAbout: React.FC<AboutProps> = ({ social, className }) => {
  return (
    <div className={`pb-10 sm:pb-0 ${className}`}>
      <div className="flex flex-col text-center sm:ltr:text-left sm:rtl:text-right max-w-[300px] mx-auto sm:ltr:ml-0 sm:rtl:mr-0 pb-6 sm:pb-5">
        <Logo className="mx-auto mb-3 lg:mb-5 sm:ltr:ml-0 sm:rtl:mr-0" />
        <Text>{"Reading books can have a profound impact on our lives."}</Text>
      </div>

      {social && (
        <ul className="flex flex-wrap justify-center mx-auto sm:justify-start">
          {social?.map((item) => (
            <li
              className="transition hover:opacity-80 last:ltr:mr-0 md:ltr:mr-5 md:mx-0 ltr:mr-4 last:rtl:ml-0 rtl:ml-4 md:rtl:ml-5"
              key={`social-list--key${item.id}`}
            >
              <Link to={item.path ? item.path : "/#"}>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    height={item.height}
                    width={item.width}
                    className="transform scale-85 md:scale-100"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WidgetAbout;
