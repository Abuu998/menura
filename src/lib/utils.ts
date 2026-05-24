import { ClassValue, clsx } from "clsx";
import * as Application from "expo-application";
import * as Haptics from "expo-haptics";
import { twMerge } from "tailwind-merge";
import { Toast } from "toastify-react-native";
import { ToastShowParams } from "toastify-react-native/utils/interfaces";
import { Dish } from "./db/schema";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export function getRandomDishFromDishesArray(arr: Dish[]): string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex].id;
}

export function toastAndVibrate({
  message,
  type = "default",
}: {
  message: string;
  type: ToastShowParams["type"];
}) {
  Toast.show({
    type,
    text1: message,
    onShow: () =>
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
  });
}

export function getAppVersion() {
  return Application.nativeApplicationVersion || "Unknown";
}

export function getAppBuild() {
  return Application.nativeBuildVersion || "Unknown";
}
