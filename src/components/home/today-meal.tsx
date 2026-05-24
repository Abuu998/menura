import { useTodaysMeal } from "@/hooks/meals";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Empty } from "../ui/empty";
import { MealCard } from "../ui/meal";

type TodaysMealsProps = {
  className?: React.ComponentProps<typeof View>["className"];
};

export function TodaysMeal({ className }: TodaysMealsProps) {
  const { t } = useTranslation();
  const todaysMeal = useTodaysMeal();

  return (
    <Card className="mt-8 p-4">
      <CardTitle
        title={`🍽️ ${t("home.title")}`}
        titleClassName="font-semibold tracking-wider uppercase"
      />

      <CardContent className="mt-8">
        {todaysMeal ? (
          <MealCard meal={todaysMeal} withDate />
        ) : (
          <Empty message={t("home.no-meal-selected")} />
        )}
      </CardContent>
    </Card>
  );
}
