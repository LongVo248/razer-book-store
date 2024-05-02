import { siteSettings } from "@/settings/site-settings";
import cn from "classnames";
import { Link } from "react-router-dom";

const Logo: React.FC<React.AnchorHTMLAttributes<object>> = ({
  className,
  href = siteSettings.logo.href,
  ...props
}) => {
  return (
    <Link
      to={href}
      className={cn("inline-flex focus:outline-none", className)}
      {...props}
    >
      <img
        src={siteSettings.logo.url}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
