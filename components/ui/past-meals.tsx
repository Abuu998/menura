import { usePastMeals } from "@/hooks/meals";
import { View, Text, FlatList } from "react-native";
import { MealCard } from "./meal";

export function PastMeals() {
  const meals = usePastMeals();

  return (
    <View className="pt-8">
      <FlatList
        data={meals}
        // className="mt"
        ItemSeparatorComponent={() => <View className="h-4" />}
        renderItem={({ item }) => (
          <MealCard meal={item} withDate className="bg-secondary p-4 rounded-lg" />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
