import { MyView } from "@/components/ui/defaults";
import { Header } from "@/components/home/header";
import { Today } from "@/components/home/today";
import { TodaysMeal } from "@/components/home/today-meal";
import { CreateMealTabs } from "@/components/tabs";
import { ScrollView } from "react-native";
import { withUniwind } from "uniwind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = withUniwind(RNSafeAreaView);

export default function Home() {
  return (
    <MyView className="flex-1">
      <SafeAreaView className="pb-20">
        <ScrollView showsVerticalScrollIndicator={false} className="px-4">
          <Header />
          <Today />
          <TodaysMeal />
          <CreateMealTabs />
        </ScrollView>
      </SafeAreaView>
    </MyView>
  );
}
