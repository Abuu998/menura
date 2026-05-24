import { Link } from "expo-router";
import { MyText } from "../ui/defaults";
import { Ionicons as RawIconicons } from "@expo/vector-icons";
import { cn } from "@/lib/utils";

import { withUniwind } from "uniwind";
import { View } from "react-native";

const Ionicons = withUniwind(RawIconicons);

type SettingsLinkProps = {} & React.ComponentProps<typeof Link>;

export function SettingsLink({ children, className, ...props }: SettingsLinkProps) {
  return (
    <Link className={cn("", className)} {...props}>
      <View className="flex-row items-center justify-between w-full py-2 px-3 rounded-lg bg-secondary/50">
        <MyText>{children}</MyText>
        <Ionicons
          name="chevron-forward"
          size={18}
          className=""
          colorClassName="accent-foreground"
        />
      </View>
    </Link>
  );
}
