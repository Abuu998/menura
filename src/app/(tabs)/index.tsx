import { Header } from "@/components/home/header";
import { Today } from "@/components/home/today";
import { TodaysMeal } from "@/components/home/today-meal";
import { CreateMealTabs } from "@/components/tabs";
import { MyView } from "@/components/ui/defaults";
import { ScrollView, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";

const SafeAreaView = withUniwind(RNSafeAreaView);

export default function Home() {
  return (
    <MyView className="flex-1">
      <SafeAreaView className="pb-20">
        <ScrollView showsVerticalScrollIndicator={false} className="px-5">
          <Header />
          <Today />
          <TodaysMeal />
          <CreateMealTabs />
          <View className="h-2" />
        </ScrollView>
      </SafeAreaView>
    </MyView>
  );
}
