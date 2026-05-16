import { View } from "react-native";
import { MyText } from "../ui/defaults";
import { Ionicons as RawIconicons } from "@expo/vector-icons";
import { withUniwind } from "uniwind";

const Ionicons = withUniwind(RawIconicons);

interface SettingsSectionProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  description?: string;
}

export function SettingsSection({
  title,
  icon,
  children,
  description,
}: SettingsSectionProps) {
  return (
    <View className="mb-8">
      <View className="px-4 mb-4">
        <View className="flex-row items-center gap-2 mb-1">
          {icon && (
            <Ionicons
              name={icon as any}
              size={18}
              colorClassName="text-primary"
            />
          )}
          <MyText className="text-foreground font-semibold text-lg">
            {title}
          </MyText>
        </View>
        {description && (
          <MyText className="text-muted-foreground text-sm ml-6">
            {description}
          </MyText>
        )}
      </View>
      <View className="px-4 gap-2">{children}</View>
    </View>
  );
}
