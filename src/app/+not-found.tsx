import { View } from "react-native";
import { Link, Stack } from "expo-router";
import { MyView } from "@/components/ui/defaults";

export default function NotFoundScreen() {
  return (
    <MyView className="flex-1 items-center justify-center">
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View>
        <Link href="/" className="text-accent-foreground underline">
          Go back to Home screen!
        </Link>
      </View>
    </MyView>
  );
}
