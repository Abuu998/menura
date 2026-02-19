import { MyView } from "@/components/ui/defaults";
import { Header } from "@/components/home/header";
import { Today } from "@/components/home/today";
import { TodaysMeal } from "@/components/home/today-meal";
import { CreateMealTabs } from "@/components/tabs";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <MyView className="flex-1 py-safe">
      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        <Header />
        <Today />
        <TodaysMeal />
        <CreateMealTabs />
      </ScrollView>
    </MyView>
  );
}
