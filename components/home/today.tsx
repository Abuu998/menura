import { View } from "react-native";
import { MyText } from "../ui/defaults";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { useClock } from "@/hooks/timer";
import { Text } from "react-native";

export function Today() {
  const { t } = useTranslation();
  const { now } = useClock();
  return (
    <View className="mt-4">
      <MyText className="font-semibold text-2xl text-muted-foreground  border-b border-b-border self-start">
        {t("home.today")}
      </MyText>
      <MyText className="text-lg mt-3">
        <Text>{t(`home.days.${format(now, "EEEE").toLowerCase()}`)}, </Text>
        <Text>{format(now, "dd/MM/yyyy HH:mm:ss")}</Text>
      </MyText>
    </View>
  );
}
