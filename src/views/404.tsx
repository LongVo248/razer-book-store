import LayoutA from "@/layouts/LayoutA";
import HeaderType from "@/types/header-type";
import ErrorInformation from "@/components/404/error-information";

export default function ErrorPage() {
  return (
    <LayoutA headerType={HeaderType.DEFAULT}>
      <ErrorInformation />
    </LayoutA>
  );
}
