import { relations, sql } from "drizzle-orm";
import { sqliteTable as table, text } from "drizzle-orm/sqlite-core";
import uuid from "react-native-uuid";

export const mains = table("mains", {
  id: text("id").primaryKey().$default(uuid.v4),
  name: text("name").notNull().unique(),
});

export const secondaries = table("secondaries", {
  id: text("id").primaryKey().$default(uuid.v4),
  name: text("name").notNull().unique(),
});

export const tertiaries = table("tertiaries", {
  id: text("id").primaryKey().$default(uuid.v4),
  name: text("name").notNull().unique(),
});

export const sauces = table("sauces", {
  id: text("id").primaryKey().$default(uuid.v4),
  name: text("name").notNull().unique(),
});

export const meals = table("meals", {
  id: text("id").primaryKey().$default(uuid.v4),
  date: text("created").default(sql`(CURRENT_TIMESTAMP)`),
  mainId: text("main_id")
    .notNull()
    .references(() => mains.id),
  secondaryId: text("secondary_id")
    .notNull()
    .references(() => secondaries.id),
  tertiaryId: text("tertiary_id").references(() => tertiaries.id),
  sauceId: text("sauce_id").references(() => sauces.id),
});

export const mealsRelations = relations(meals, ({ one }) => ({
  mains: one(mains, {
    fields: [meals.mainId],
    references: [mains.id],
  }),
  secondaries: one(secondaries, {
    fields: [meals.mainId],
    references: [secondaries.id],
  }),
  tertiaries: one(tertiaries, {
    fields: [meals.mainId],
    references: [tertiaries.id],
  }),
  sauces: one(sauces, {
    fields: [meals.mainId],
    references: [sauces.id],
  }),
}));

export const mainsRelations = relations(mains, ({ many }) => ({
  meals: many(meals),
}));

export const secondariesRelations = relations(secondaries, ({ many }) => ({
  meals: many(meals),
}));

export const tertiariesRelations = relations(tertiaries, ({ many }) => ({
  meals: many(meals),
}));

export const saucesRelations = relations(sauces, ({ many }) => ({
  meals: many(meals),
}));
