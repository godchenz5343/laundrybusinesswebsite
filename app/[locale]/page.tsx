import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import ImageSlider from "./component/imageslider";
export default async function HomePage() {

  return (
    <div>
      <ImageSlider/>
      <div className="flex justify-center pt-4 text-3xl text-blue-500">
        บริการของเรา
      </div>
    </div>
  );
}