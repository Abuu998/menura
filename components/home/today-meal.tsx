import { cn } from "@/lib/utils";
import { View, Text } from "react-native";
import { MyText } from "../ui/defaults";
import { useTranslation } from "react-i18next";
import { useTodaysMeal } from "@/hooks/meals";
import { Ionicons } from "@expo/vector-icons";
import { Empty } from "../ui/empty";

type TodaysMealsProps = {
  className?: React.ComponentProps<typeof View>["className"];
};

export function TodaysMeal({ className }: TodaysMealsProps) {
  const { t } = useTranslation();
  const todaysMeal = useTodaysMeal();

  return (
    <View className={cn("mt-8 bg-muted rounded-2xl p-4", className)}>
      <MyText className="text-xl font-semibold self-start">{t("home.today-meal")}</MyText>

      <View className="mt-4">
        {todaysMeal ? (
          <MyText>{todaysMeal.id}</MyText>
        ) : (
          <Empty message={t("home.no-meal-selected")} />
        )}
      </View>
    </View>
  );
}
