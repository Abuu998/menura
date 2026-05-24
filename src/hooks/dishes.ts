import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import type { Dish } from "@/lib/db/schema";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";

export function useDishes(type?: Dish["type"]): Dish[] {
  const { data } = useLiveQuery(
    db.query.dishes.findMany({
      where: type ? eq(schema.dishes.type, type) : undefined,
    }),
  );

  if (!data) return [];

  return data;
}
