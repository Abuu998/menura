import { useTodaysMeal } from "@/hooks/meals";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { MyText } from "../ui/defaults";
import { Empty } from "../ui/empty";
import { MealCard } from "../ui/meal";

type TodaysMealsProps = {
  className?: React.ComponentProps<typeof View>["className"];
};

export function TodaysMeal({ className }: TodaysMealsProps) {
  const { t } = useTranslation();
  const todaysMeal = useTodaysMeal();

  return (
    <View className={cn("mt-8 bg-card rounded-xl p-5", className)}>
      <MyText
        variant="title"
        className="font-semibold tracking-wider uppercase"
      >{`🍽️ ${t("home.title")}`}</MyText>
      <View className="mt-6">
        {todaysMeal ? (
          <MealCard meal={todaysMeal} contentClassName="p-4 px-5" />
        ) : (
          <Empty message={t("home.no-meal-selected")} />
        )}
      </View>
    </View>
  );
}
