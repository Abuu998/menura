import { type Tab, tabs } from "@/types/utils";
import { useCallback, useState } from "react";
import { ToastAndroid, View } from "react-native";
import { Button } from "../ui/button";
import { cn, getRandomDishFromDishesArray } from "@/lib/utils";
import { MyText } from "../ui/defaults";
import { useTranslation } from "react-i18next";
import { CreateManualMealTab } from "./manual";
import { CreateRandomMealTab } from "./random";
import { useDishes } from "@/hooks/dishes";
import { Dish } from "@/lib/db/schema";
import { createMealSchema } from "@/lib/validation/create-meal";
import { createNewMeal } from "@/hooks/meals";

export type MealSelection = {
  main: string;
  secondary: string;
  tertiary: string;
  sauce: string;
};

const initialState = {
  main: "",
  secondary: "",
  tertiary: "",
  sauce: "",
};

export function CreateMealTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("manual");
  const [selectedDishes, setSelectedDishes] = useState<MealSelection>(initialState);
  const dishes = useDishes();

  const selectDishesForMeal = (type: Dish["type"], dishId: string) => {
    setSelectedDishes((prev) => ({
      ...prev,
      [type]: dishId,
    }));
  };

  const createMeal = async () => {
    const parsed = createMealSchema.safeParse(selectedDishes);

    if (!parsed.success || !parsed.data) {
      ToastAndroid.show("Please select valid Dishes", ToastAndroid.SHORT);
      return;
    }

    try {
      await createNewMeal(parsed.data);
      setSelectedDishes(initialState);
      ToastAndroid.show("🎉 Meal created successfully", ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
      ToastAndroid.show("Oops! Failed to create meal", ToastAndroid.SHORT);
    }
  };

  const randomizeMeal = useCallback(() => {
    const mains = dishes.filter((dish) => dish.type === "main");
    const secondaries = dishes.filter((dish) => dish.type === "secondary");
    const tertiaries = dishes.filter((dish) => dish.type === "tertiary");
    const sauces = dishes.filter((dish) => dish.type === "sauce");

    const randomMain = getRandomDishFromDishesArray(mains);
    const randomSecondary = getRandomDishFromDishesArray(secondaries);
    const randomTertiary = getRandomDishFromDishesArray(tertiaries);
    const randomsauce = getRandomDishFromDishesArray(sauces);

    setSelectedDishes({
      main: randomMain,
      secondary: randomSecondary,
      tertiary: randomTertiary,
      sauce: randomsauce,
    });
  }, [dishes]);

  const handleTabChange = (tab: Tab) => {
    setSelectedDishes(initialState);
    setActiveTab(tab);
  };

  const Tab = activeTab === "manual" ? CreateManualMealTab : CreateRandomMealTab;

  return (
    <View className="mt-6">
      <TabSelector activeTab={activeTab} selectTab={handleTabChange} />
      <Tab
        dishes={dishes}
        className="bg-secondary/40 border border-primary/60 border-t-0 p-4 rounded-b-xl"
        selectDishes={selectDishesForMeal}
        selectedDishes={selectedDishes}
        createMeal={createMeal}
        randomizeMeal={randomizeMeal}
      />
    </View>
  );
}

type TabSelectorProps = {
  selectTab: (t: Tab) => void;
  className?: string;
  activeTab: Tab;
};

function TabSelector({ className, activeTab, selectTab }: TabSelectorProps) {
  const { t } = useTranslation();

  return (
    <View className="flex-row">
      {tabs.map((tab) => (
        <Button
          key={tab}
          onPress={() => selectTab(tab)}
          className={cn(
            "flex-1 items-center py-3 px-5 gap-1 rounded-none rounded-t-xl",
            className,
            {
              "bg-secondary/40 border border-primary/60 border-b-0": activeTab === tab,
              "bg-muted/20 border-b border-b-primary/60": activeTab !== tab,
            },
          )}
        >
          <MyText
            className={cn("font-bold", {
              "text-primary": activeTab === tab,
              "text-muted-foreground/70": activeTab !== tab,
            })}
          >
            {t(`home.tabs.${tab}`)}
          </MyText>
        </Button>
      ))}
    </View>
  );
}
