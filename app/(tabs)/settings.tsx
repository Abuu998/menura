import { SettingsLink } from "@/components/settings/link";
import { MyText, MyView } from "@/components/ui/defaults";
import { Ionicons as RawIconicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { withUniwind } from "uniwind";

const Ionicons = withUniwind(RawIconicons);

const links: {
  name: string;
  link: import("d:/Programming/React Native/menura/.expo/types/router").Href;
}[] = [];

export default function Settings() {
  const { t } = useTranslation();
  return (
    <MyView className="flex-1 py-safe">
      <View className="px-4 mt-4 flex-row items-center">
        <Ionicons name="settings-sharp" size={18} colorClassName="accent-foreground" />
        <MyText variant="title" className="border-b border-b-muted ml-2">
          {t("settings.title")}
        </MyText>
      </View>
      <View className="px-4 mt-6 gap-4">
        <SettingsLink href="/history">Got to History</SettingsLink>
      </View>
    </MyView>
  );
}
