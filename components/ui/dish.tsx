import { Dish } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { View, Text } from "react-native";
import { MyText } from "./defaults";

type DishCardProps = {
  dish: Dish;
  className?: React.ComponentProps<typeof View>["className"];
};

export function DishCard({ dish, className }: DishCardProps) {
  return (
    <View className={cn("", className)}>
      <MyText>{dish.name}</MyText>
    </View>
  );
}
