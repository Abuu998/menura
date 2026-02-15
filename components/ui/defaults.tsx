import { cn } from "@/lib/utils";
import { View, Text } from "react-native";

type MyViewProps = {} & React.ComponentProps<typeof View>;

export function MyView({ className, ...props }: MyViewProps) {
  return <View className={cn("bg-background", className)} {...props} />;
}

type MyTextProps = {} & React.ComponentProps<typeof Text>;

export function MyText({ className, ...props }: MyTextProps) {
  return <Text className={cn("text-foreground", className)} {...props} />;
}
