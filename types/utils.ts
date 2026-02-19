import { Dish } from "@/lib/db/schema";

export interface Meal {
  id: string;
  date: string | number | Date;
  dishes: Dish[];
}
export const tabs = ["manual", "random"] as const;

export type Tab = (typeof tabs)[number];
