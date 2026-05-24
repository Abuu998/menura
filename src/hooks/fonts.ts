import { useFonts } from "expo-font";

export function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    "Raleway Regular": require("@/assets/fonts/Raleway-Regular.ttf"),
    "Raleway SemiBold": require("@/assets/fonts/Raleway-SemiBold.ttf"),
  });

  return fontsLoaded;
}
