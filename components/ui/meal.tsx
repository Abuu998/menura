import { cn } from "@/lib/utils";
import type { Meal } from "@/types/utils";
import { View, Text } from "react-native";

type MealCardProps = {
  meal: Meal;
  className?: React.ComponentProps<typeof View>["className"];
};

export function MealCard({ meal, className }: MealCardProps) {
  return (
    <View className={cn("", className)}>
      <Text>{meal.id}</Text>
    </View>
  );
}
