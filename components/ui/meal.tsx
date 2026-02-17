import { Meal } from "@/lib/db/schema";
import { View, Text } from "react-native";

type MealCardProps = {
  meal: Meal;
};

export function MealCard({}: MealCardProps) {
  return (
    <View>
      <Text>Meal</Text>
    </View>
  );
}
