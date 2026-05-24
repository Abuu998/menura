import { eq } from "drizzle-orm";
import { db } from "./db/index";
import type { Dish } from "./db/schema";
import * as schema from "./db/schema";

type InsertDishes = {
  main: string[];
  secondary: string[];
  tertiary: string[];
  sauce: string[];
};

const dishes: InsertDishes = {
  main: [
    "Umuceri",
    "Ibijumbu",
    "Ibirayi",
    "Ibitoke",
    "Imyumbati",
    "Icapati",
    "Ubugari",
  ],
  secondary: ["Ibiharage", "Ubushaza"],
  tertiary: ["Imikubi", "Imisoma", "Isombe", "Lengalenga"],
  sauce: ["Inyama", "Isamaki", "Indagara"],
};

async function seedMainDishes() {
  try {
    const existing = await db.query.dishes.findFirst({
      where: (d) => eq(d.type, "main"),
    });

    if (existing) return;

    await db
      .insert(schema.dishes)
      .values(
        dishes.main.map((d): Omit<Dish, "id"> => ({ name: d, type: "main" })),
      );
  } catch (err) {
    throw new Error("Failed to seed main dishes");
  }
}

async function seedSecondaryDishes() {
  try {
    const existing = await db.query.dishes.findFirst({
      where: (d) => eq(d.type, "secondary"),
    });

    if (existing) return;

    await db
      .insert(schema.dishes)
      .values(
        dishes.secondary.map(
          (d): Omit<Dish, "id"> => ({ name: d, type: "secondary" }),
        ),
      );
  } catch (err) {
    throw new Error("Failed to seed main dishes");
  }
}

async function seedTertialyDishes() {
  try {
    const existing = await db.query.dishes.findFirst({
      where: (d) => eq(d.type, "tertiary"),
    });

    if (existing) return;

    await db
      .insert(schema.dishes)
      .values(
        dishes.tertiary.map(
          (d): Omit<Dish, "id"> => ({ name: d, type: "tertiary" }),
        ),
      );
  } catch (err) {
    throw new Error("Failed to seed main dishes");
  }
}

async function seedSaucesDishes() {
  try {
    const existing = await db.query.dishes.findFirst({
      where: (d) => eq(d.type, "sauce"),
    });

    if (existing) return;

    await db
      .insert(schema.dishes)
      .values(
        dishes.sauce.map((d): Omit<Dish, "id"> => ({ name: d, type: "sauce" })),
      );
  } catch (err) {
    throw new Error("Failed to seed main dishes");
  }
}

export async function main() {
  await seedMainDishes();
  await seedSecondaryDishes();
  await seedTertialyDishes();
  await seedSaucesDishes();
}
