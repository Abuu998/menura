import { usePastMeals } from "@/hooks/meals";
import { View, Text, FlatList } from "react-native";
import { MealCard } from "./meal";
import { MyText } from "./defaults";
import { useTranslation } from "react-i18next";

export function PastMeals() {
  const meals = usePastMeals();
  const { t } = useTranslation();

  return (
    <FlatList
      data={meals}
      ListHeaderComponent={() => (
        <MyText variant="title" className="border-b border-b-muted mb-5 self-start">
          {t("history.title")}
        </MyText>
      )}
      ItemSeparatorComponent={() => <View className="h-4" />}
      renderItem={({ item }) => (
        <MealCard meal={item} withDate className="bg-secondary p-4 rounded-lg" />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
