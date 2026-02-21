import { View } from "react-native";
import { MyText } from "../ui/defaults";
import type { TabProps } from "./manual";
import { cn } from "@/lib/utils";
import { Empty } from "../ui/empty";
import { GroupedDishes } from "../ui/grouped-dishes";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type RandomTabProps = {
  randomizeMeal: () => void;
} & TabProps;

export function CreateRandomMealTab({
  className,
  dishes,
  createMeal,
  selectDishes,
  selectedDishes,
  randomizeMeal,
}: RandomTabProps) {
  const { t } = useTranslation();

  useEffect(() => randomizeMeal(), []);

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
      <View className="mt-8">
        <Button className="py-4 px-5 rounded-lg bg-accent/80" onPress={randomizeMeal}>
          <MyText className="text-center font-semibold">{t("cta.randomize-meal")}</MyText>
        </Button>
        <Button className="py-4 px-5 rounded-lg mt-4 bg-primary/80" onPress={createMeal}>
          <MyText className="text-center font-semibold">{t("cta.create-meal")}</MyText>
        </Button>
      </View>
    </View>
  );
}
