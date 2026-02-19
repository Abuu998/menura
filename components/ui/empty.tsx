import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { MyText } from "./defaults";
import { cn } from "@/lib/utils";

type EmptyProps = {
  message?: string;
  className?: string;
};

export function Empty({ message, className }: EmptyProps) {
  return (
    <View className={cn("", className)}>
      <Text className="text-center text-accent/50 mb-2">
        <Ionicons name="file-tray-full-outline" size={50} />
      </Text>
      <MyText className="text-muted-foreground text-center text-xl">{message}</MyText>
    </View>
  );
}
