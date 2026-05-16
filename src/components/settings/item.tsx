import { View, Pressable, Switch } from "react-native";
import { MyText } from "../ui/defaults";
import { Ionicons as RawIconicons } from "@expo/vector-icons";
import { withUniwind } from "uniwind";
import { cn } from "@/lib/utils";

const Ionicons = withUniwind(RawIconicons);

interface SettingItemProps {
  icon?: string;
  title: string;
  description?: string;
  onPress?: () => void;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  className?: string;
}

export function SettingItem({
  icon,
  title,
  description,
  onPress,
  value,
  onValueChange,
  className,
}: SettingItemProps) {
  const hasToggle = typeof value === "boolean" && typeof onValueChange === "function";

  return (
    <Pressable onPress={hasToggle ? undefined : onPress} disabled={hasToggle}>
      <View
        className={cn(
          "flex-row items-center justify-between w-full py-4 px-4 rounded-xl bg-card border border-border active:bg-secondary/30",
          className,
        )}
      >
        <View className="flex-row items-center flex-1">
          {icon && (
            <Ionicons
              name={icon as any}
              size={22}
              colorClassName="text-foreground"
              className="mr-4"
            />
          )}
          <View className="flex-1">
            <MyText className="text-foreground font-semibold text-base">{title}</MyText>
            {description && (
              <MyText className="text-muted-foreground text-xs mt-1.5">{description}</MyText>
            )}
          </View>
        </View>
        {hasToggle && typeof value === "boolean" && typeof onValueChange === "function" ? (
          <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: "#767577", true: "#81c784" }}
            thumbColor={value ? "#4CAF50" : "#f4f3f4"}
          />
        ) : (
          <Ionicons name="chevron-forward" size={20} colorClassName="text-foreground" />
        )}
      </View>
    </Pressable>
  );
}
