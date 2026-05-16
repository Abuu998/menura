import { SwitchLanguage } from "@/components/lang/switcher";
import { MyText, MyView } from "@/components/ui/defaults";
import { PastMeals } from "@/components/ui/past-meals";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";

const SafeAreaView = withUniwind(RNSafeAreaView);

export default function History() {
  return (
    <MyView className="flex-1">
      <SafeAreaView className="px-4">
        <View className="my-5 flex-row items-center justify-end">
          <SwitchLanguage />
        </View>
        <PastMeals />
      </SafeAreaView>
    </MyView>
  );
}
