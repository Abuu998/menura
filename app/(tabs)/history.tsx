import { SwitchLanguage } from "@/components/lang/switcher";
import { MyText, MyView } from "@/components/ui/defaults";
import { PastMeals } from "@/components/ui/past-meals";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

export default function History() {
  const { t } = useTranslation();
  return (
    <MyView className="flex-1 py-safe px-4">
      <View className="mt-5 flex-row items-center justify-between">
        <MyText variant="title" className="border-b border-b-muted self-start">
          {t("history.title")}
        </MyText>
        <SwitchLanguage />
      </View>
      <PastMeals />
    </MyView>
  );
}
