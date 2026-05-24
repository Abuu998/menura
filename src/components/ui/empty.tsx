import { cn } from "@/lib/utils";
import { Ionicons as RNIcon } from "@expo/vector-icons";
import { View } from "react-native";
import { withUniwind } from "uniwind";
import { MyText } from "./defaults";

type EmptyProps = {
  message?: string;
  className?: string;
};

const Ionicons = withUniwind(RNIcon);

export function Empty({ message, className }: EmptyProps) {
  return (
    <View className={cn("items-center", className)}>
      <Ionicons
        name="file-tray-outline"
        size={50}
        colorClassName="accent-accent/40"
      />
      <MyText className="text-muted-foreground text-center text-xl mt-2">
        {message}
      </MyText>
    </View>
  );
}
