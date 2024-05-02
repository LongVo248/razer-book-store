import Container from "@/components/ui/container";
import { siteSettings } from "@/settings/site-settings";

interface CopyrightProps {
  payment?: {
    id: string | number;
    path?: string;
    name: string;
    image: string;
    width: number;
    height: number;
  }[];
}
const year = new Date().getFullYear();
const Copyright: React.FC<CopyrightProps> = ({ payment }) => {
  return (
    <div className="pb-20 lg:pb-7">
      <Container>
        <div className="flex flex-col pt-6 text-center border-t md:flex-row md:justify-between border-border-three lg:pt-7">
          <p className="text-brand-dark text-sm leading-7 lg:leading-[27px] lg:text-15px">
            &copy;&nbsp;{"Copyright"} {year}&nbsp;
            <a
              className="transition-colors duration-200 ease-in-out text-brand-dark hover:text-brand"
              href={siteSettings.author.websiteUrl}
            >
              {siteSettings.author.name}
            </a>
            &nbsp; {"All rights reserved"}
          </p>

          {payment && (
            <ul className="flex flex-wrap justify-center items-center -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
              {payment?.map((item) => (
                <li
                  className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 ltr:mr-4 sm:ltr:mr-5 lg:ltr:mr-7 last:ltr:mr-0 rtl:ml-4 sm:rtl:ml-5 lg:rtl:ml-7 last:rtl:ml-0"
                  key={`payment-list--key${item.id}`}
                >
                  <a
                    href={item.path ? item.path : "/#"}
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      height={item.height}
                      width={item.width}
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Copyright;
