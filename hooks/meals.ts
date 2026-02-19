import { db } from "@/lib/db";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import * as schema from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import { startOfToday, format } from "date-fns";
import { Meal } from "@/types/utils";
import { CreateMealInput } from "@/lib/validation/create-meal";

export function useTodaysMeal(): Meal | null {
  const { data } = useLiveQuery(
    db.query.meals.findFirst({
      where: eq(schema.meals.date, format(startOfToday(), "yyyy-MM-dd")),
      with: {
        dishes: {
          columns: { dishId: false, mealId: false },
          with: { dish: true },
        },
      },
    }),
  );

  if (!data) {
    return null;
  }

  const meal = {
    ...data,
    dishes: data.dishes.map((dish) => ({
      ...dish.dish,
    })),
  };

  return meal;
}

export function usePastMeals(): Meal[] {
  const { data } = useLiveQuery(
    db.query.meals.findMany({
      with: {
        dishes: {
          columns: { dishId: false, mealId: false },
          with: { dish: true },
        },
      },
      orderBy: desc(schema.meals.date),
    }),
  );

  if (!data) {
    return [];
  }

  const formatDishes = (
    data: {
      dish: {
        id: string;
        name: string;
        type: "main" | "secondary" | "tertiary" | "sauce";
      };
    }[],
  ) => {
    return {
      ...data,
      dishes: data.map((d) => ({
        ...d.dish,
      })),
    };
  };

  const meals = data.map((d) => ({
    ...d,
    ...formatDishes(d.dishes),
  }));

  return meals;
}

export async function createNewMeal(d: CreateMealInput) {
  await db.transaction(async (tx) => {
    const [meal] = await tx
      .insert(schema.meals)
      .values({
        date: format(startOfToday(), "yyyy-MM-dd"),
      })
      .returning();

    const values = (Object.keys(d) as (keyof CreateMealInput)[]).map((key) => ({
      mealId: meal.id,
      dishId: d[key],
    }));

    await tx.insert(schema.dishesToMeals).values(values);
  });
}
