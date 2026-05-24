import { createNewMeal } from "../hooks/meals";
import { tryCatch } from "../lib/try-catch";
import { toastAndVibrate } from "../lib/utils";
import { CreateMealInput } from "../lib/validation/create-meal";

export async function createMeal(
  data: CreateMealInput,
  t: (key: string) => string,
  onMealCreated?: () => void,
) {
  const { error } = await tryCatch(createNewMeal(data));

  if (error) {
    toastAndVibrate({
      type: "error",
      message: t("toasts.createMeal.error"),
    });
  } else {
    onMealCreated?.();
    toastAndVibrate({
      type: "success",
      message: `🎉 ${t("toasts.createMeal.success")}`,
    });
  }
}
