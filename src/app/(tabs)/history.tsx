import { MyView } from "@/components/ui/defaults";
import { PastMeals } from "@/components/ui/past-meals";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";

const SafeAreaView = withUniwind(RNSafeAreaView);

export default function History() {
  return (
    <MyView className="flex-1">
      <SafeAreaView className="p-5">
        <PastMeals />
      </SafeAreaView>
    </MyView>
  );
}
