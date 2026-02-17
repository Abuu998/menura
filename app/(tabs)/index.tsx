import { MyText, MyView } from "@/components/ui/defaults";
import { Header } from "@/components/ui/home/header";
import { Today } from "@/components/ui/home/today";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <MyView className="flex-1 py-safe px-4">
      <Header />
      <Today />
    </MyView>
  );
}
