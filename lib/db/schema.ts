import { relations, sql } from "drizzle-orm";
import { sqliteTable as table, text, integer, primaryKey } from "drizzle-orm/sqlite-core";
import uuid from "react-native-uuid";

export const dishesType = ["main", "secondary", "tertiary", "sauce"] as const;

export const dishes = table("dishes", {
  id: text("id").primaryKey().$default(uuid.v4),
  name: text("name").notNull().unique(),
  type: text("type", { enum: dishesType }).notNull(),
});

export const meals = table("meals", {
  id: text("id").primaryKey().$default(uuid.v4),
  date: integer("created", { mode: "timestamp" })
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
});

export const dishesToMeals = table(
  "dishes_to_meals",
  {
    dishId: text("dish_id")
      .notNull()
      .references(() => dishes.id),
    mealId: text("meal_id")
      .notNull()
      .references(() => meals.id),
  },
  (t) => [primaryKey({ columns: [t.dishId, t.mealId] })],
);

export const mealsRelations = relations(meals, ({ many }) => ({
  dishes: many(dishesToMeals),
}));

export const dishesRelations = relations(dishes, ({ many }) => ({
  meals: many(dishesToMeals),
}));

export const dishesToMealsRelations = relations(dishesToMeals, ({ one }) => ({
  dish: one(dishes, {
    fields: [dishesToMeals.dishId],
    references: [dishes.id],
  }),
  meal: one(meals, {
    fields: [dishesToMeals.mealId],
    references: [meals.id],
  }),
}));

export type Meal = typeof meals.$inferSelect;
export type Dish = typeof dishes.$inferSelect;
