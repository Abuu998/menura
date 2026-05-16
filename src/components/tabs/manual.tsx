import { View, Text } from "react-native";
import { MyText } from "../ui/defaults";
import { cn } from "@/lib/utils";
import { Dish } from "@/lib/db/schema";
import { Empty } from "../ui/empty";
import { GroupedDishes } from "../ui/grouped-dishes";
import { Button } from "../ui/button";
import { MealSelection } from ".";
import { useTranslation } from "react-i18next";

export type TabProps = {
  className?: string;
  dishes: Dish[];
  selectDishes: (type: Dish["type"], dishId: string) => void;
  createMeal: () => Promise<void>;
  selectedDishes: MealSelection;
};

export function CreateManualMealTab({
  className,
  dishes,
  createMeal,
  selectDishes,
  selectedDishes,
}: TabProps) {
  const { t } = useTranslation();

  const render =
    dishes.length < 1 ? (
      <Empty message="No dishes available" />
    ) : (
      <GroupedDishes
        dishes={dishes}
        selectDishes={selectDishes}
        selectedDishes={selectedDishes}
        withCheckbox
      />
    );

  return (
    <View className={cn("", className)}>
      {render}
      <Button className="py-4 px-5 rounded-lg mt-8 bg-primary/80" onPress={createMeal}>
        <MyText className="text-center font-semibold">{t("cta.create-meal")}</MyText>
      </Button>
    </View>
  );
}
