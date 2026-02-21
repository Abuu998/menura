import { cn } from "@/lib/utils";
import type { Meal } from "@/types/utils";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { MyText } from "./defaults";
import { format } from "date-fns";
import { DishCard } from "./dish";

type MealCardProps = {
  meal: Meal;
  withDate?: boolean;
  className?: React.ComponentProps<typeof View>["className"];
};

export function MealCard({ meal, withDate = false }: MealCardProps) {
  const { t } = useTranslation();
  return (
    <View className={cn("gap-2")}>
      {withDate && (
        <MyText className="text-xl font-semibold mb-3">
          {t(`home.days.${format(meal.date, "EEEE").toLowerCase()}`)}
          {format(meal.date, ", dd/MM/yyyy")}
        </MyText>
      )}
      {meal.dishes.map((dish, i) => (
        <View key={dish.id} className="flex-row items-end gap-2">
          <MyText className="text-xl font-bold">{i + 1}.</MyText>
          <DishCard key={dish.id} dish={dish} />
        </View>
      ))}
    </View>
  );
}
