import type { Meal } from "@/types/utils";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Card, CardContent } from "./card";
import { MyText } from "./defaults";
import { DishCard } from "./dish";

type MealCardProps = {
  meal: Meal;
  withDate?: boolean;
  className?: string;
  contentClassName?: string;
};

export function MealCard({
  className,
  contentClassName,
  meal,
  withDate = false,
}: MealCardProps) {
  const { t } = useTranslation();
  return (
    <Card className={className}>
      {withDate && (
        <MyText className="text-xl font-semibold mb-3">
          {t(`home.days.${format(meal.date, "EEEE").toLowerCase()}`)}
          {format(meal.date, ", dd/MM/yyyy")}
        </MyText>
      )}
      <CardContent className={contentClassName}>
        {meal.dishes.map((dish, i) => (
          <View key={dish.id} className="flex-row items-end gap-2">
            <MyText className="text-xl font-bold">{i + 1}.</MyText>
            <DishCard key={dish.id} dish={dish} />
          </View>
        ))}
      </CardContent>
    </Card>
  );
}
