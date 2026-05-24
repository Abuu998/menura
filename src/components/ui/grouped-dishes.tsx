import { Dish, dishesType } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import { MealSelection } from "../tabs";
import { MyText } from "./defaults";
import { DishCard } from "./dish";
import { DishWithCheck } from "./dish-checkbox";

type GroupedDishesProps = {
  dishes: Dish[];
  className?: string;
  group?: Dish["type"];
  withCheckbox?: boolean;
  selectDishes: (type: Dish["type"], dishId: string) => void;
  selectedDishes: MealSelection;
};

export function GroupedDishes({
  dishes,
  className,
  group,
  selectDishes,
  selectedDishes,
  withCheckbox = false,
}: GroupedDishesProps) {
  const { t } = useTranslation();

  const render = group ? (
    <>
      {dishes
        .filter((dish) => dish.type === group)
        .map((dish) =>
          !withCheckbox ? (
            <DishCard key={dish.id} dish={dish} />
          ) : (
            <RadioButton.Group
              key={dish.id}
              value={selectedDishes[dish.type] ?? ""}
              onValueChange={(value) => selectDishes(dish.type, value)}
            >
              <DishWithCheck key={dish.id} dish={dish} />
            </RadioButton.Group>
          ),
        )}
    </>
  ) : (
    <View className="flex-row justify-between flex-wrap">
      {dishesType.map((type) => {
        return (
          dishes.filter((dish) => dish.type === type).length > 0 && (
            <View key={type} className="gap-y-1 w-1/2 mb-5">
              <MyText
                variant="title"
                className="text-muted-foreground capitalize"
              >
                {t(`dishes.${type}`)}
              </MyText>
              {dishes
                .filter((dish) => dish.type === type)
                .map((dish) =>
                  !withCheckbox ? (
                    <DishCard key={dish.id} dish={dish} />
                  ) : (
                    <RadioButton.Group
                      key={dish.id}
                      value={selectedDishes[dish.type] ?? ""}
                      onValueChange={(value) => selectDishes(dish.type, value)}
                    >
                      <DishWithCheck key={dish.id} dish={dish} />
                    </RadioButton.Group>
                  ),
                )}
            </View>
          )
        );
      })}
    </View>
  );

  return <View className={cn("gap-2", className)}>{render}</View>;
}
