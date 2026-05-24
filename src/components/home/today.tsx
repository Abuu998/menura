import { useClock } from "@/hooks/timer";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { MyText } from "../ui/defaults";

export function Today() {
  const { t } = useTranslation();
  const { now } = useClock();
  return (
    <View className="mt-5 flex-row items-center justify-between">
      <MyText className="text-xl text-muted-foreground uppercase tracking-widest">
        {t(`home.days.${format(now, "EEEE").toLowerCase()}`)}
      </MyText>
      <MyText className="text-muted-foreground">
        {format(now, "dd/MM/yyyy HH:mm")}
      </MyText>
    </View>
  );
}
