import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Dish } from "./db/schema";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export function getRandomDishFromDishesArray(arr: Dish[]): string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex].id;
}
