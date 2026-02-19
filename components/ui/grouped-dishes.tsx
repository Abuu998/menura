import { Dish, dishesType } from "@/lib/db/schema";
import { View, Text } from "react-native";
import { MyText } from "./defaults";
import { DishCard } from "./dish";
import { cn } from "@/lib/utils";
import { DishWithCheck } from "./dish-checkbox";
import { RadioButton } from "react-native-paper";
import { MealSelection } from "../tabs";

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
              value={selectedDishes[dish.type]}
              onValueChange={(value) => selectDishes(dish.type, value)}
            >
              <DishWithCheck key={dish.id} dish={dish} />
            </RadioButton.Group>
          ),
        )}
    </>
  ) : (
    <View className="flex-row justify-between flex-wrap divide-x divide-primary">
      {dishesType.map((type) => {
        return (
          dishes.filter((dish) => dish.type === type).length > 0 && (
            <View key={type} className="space-y-2 w-1/2 mb-2">
              <MyText className="text-2xl font-semibold text-muted-foreground border-b border-b-border">
                {type}
              </MyText>
              {dishes
                .filter((dish) => dish.type === type)
                .map((dish) =>
                  !withCheckbox ? (
                    <DishCard key={dish.id} dish={dish} />
                  ) : (
                    <RadioButton.Group
                      key={dish.id}
                      value={selectedDishes[dish.type]}
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

  return <View className={cn("space-y-2", className)}>{render}</View>;
}
