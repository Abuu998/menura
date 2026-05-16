import { cn } from "@/lib/utils";
import { View } from "react-native";
import { MyText } from "../ui/defaults";
import { useTranslation } from "react-i18next";
import { useTodaysMeal } from "@/hooks/meals";
import { Empty } from "../ui/empty";
import { MealCard } from "../ui/meal";

type TodaysMealsProps = {
  className?: React.ComponentProps<typeof View>["className"];
};

export function TodaysMeal({ className }: TodaysMealsProps) {
  const { t } = useTranslation();
  const todaysMeal = useTodaysMeal();

  return (
    <View className={cn("mt-8 bg-muted rounded-2xl p-4", className)}>
      <MyText className="text-xl font-semibold self-start border-b border-b-accent/40">
        🍽️ {t("home.today-meal")}
      </MyText>

      <View className="mt-4">
        {todaysMeal ? (
          <MealCard meal={todaysMeal} withDate />
        ) : (
          <Empty message={t("home.no-meal-selected")} />
        )}
      </View>
    </View>
  );
}
