import { createMeal } from "#/src/repos";
import { useDishes } from "@/hooks/dishes";
import type { Dish } from "@/lib/db/schema";
import { cn, getRandomDishFromDishesArray, toastAndVibrate } from "@/lib/utils";
import { createMealSchema } from "@/lib/validation/create-meal";
import { type Tab, tabs } from "@/types/utils";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Button } from "../ui/button";
import { MyText } from "../ui/defaults";
import { CreateManualMealTab } from "./manual";
import { CreateRandomMealTab } from "./random";

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
  const [selectedDishes, setSelectedDishes] =
    useState<MealSelection>(initialState);
  const dishes = useDishes();
  const { t } = useTranslation();

  const selectDishesForMeal = (type: Dish["type"], dishId: string) => {
    setSelectedDishes((prev) => ({
      ...prev,
      [type]: dishId,
    }));
  };

  const randomizeMeal = () => {
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
  };

  const handleTabChange = (tab: Tab) => {
    setSelectedDishes(initialState);
    setActiveTab(tab);
  };

  const Tab =
    activeTab === "manual" ? CreateManualMealTab : CreateRandomMealTab;

  return (
    <View className="mt-12">
      <TabSelector activeTab={activeTab} selectTab={handleTabChange} />
      <Tab
        dishes={dishes}
        className="bg-card/80 border border-accent/60 border-t-0 p-5 rounded-b-xl"
        selectDishes={selectDishesForMeal}
        selectedDishes={selectedDishes}
        createMeal={async () => {
          const parsed = createMealSchema.safeParse(selectedDishes);

          if (!parsed.success || !parsed.data) {
            toastAndVibrate({
              type: "error",
              message: t("toasts.createMeal.invalid"),
            });
            return;
          }

          createMeal(parsed.data, t, () => setSelectedDishes(initialState));
        }}
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
              "bg-card border border-accent/60 border-b-0": activeTab === tab,
              "bg-background border-b border-b-accent/60": activeTab !== tab,
            },
          )}
        >
          <MyText
            variant={activeTab === tab ? "title" : "default"}
            className={cn("text-base", {
              "text-foreground font-bold": activeTab === tab,
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
