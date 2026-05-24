import { usePastMeals } from "@/hooks/meals";
import { useTranslation } from "react-i18next";
import { FlatList, View } from "react-native";
import { MyText } from "./defaults";
import { MealCard } from "./meal";

export function PastMeals() {
  const meals = usePastMeals();
  const { t } = useTranslation();

  return (
    <FlatList
      data={meals}
      ListHeaderComponent={() => (
        <MyText
          variant="title"
          className="border-b border-b-muted mb-12 self-start"
        >
          {t("history.title")}
        </MyText>
      )}
      ItemSeparatorComponent={() => <View className="h-4" />}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <MealCard meal={item} withDate className="p-4 rounded-lg" />
      )}
      ListFooterComponent={() => <View className="h-20" />}
      keyExtractor={(item) => item.id}
    />
  );
}
