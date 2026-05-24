import { CancelButton } from "#/src/components/settings/dialog-actions";
import { SwitchLanguage } from "@/components/lang/switcher";
import { SettingItem } from "@/components/settings/item";
import { SettingsSection } from "@/components/settings/section";
import { MyText, MyView } from "@/components/ui/defaults";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { getAppBuild, getAppVersion } from "@/lib/utils";
import { Ionicons as RawIconicons } from "@expo/vector-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import { withUniwind } from "uniwind";

const Ionicons = withUniwind(RawIconicons);

interface SettingsState {
  notifications: boolean;
  darkMode: boolean;
  privateMode: boolean;
  dataSync: boolean;
  sound: boolean;
  biometric: boolean;
}

export default function Settings() {
  const { t } = useTranslation();
  const [settings, setSettings] = useState<SettingsState>({
    notifications: true,
    darkMode: false,
    privateMode: false,
    dataSync: true,
    sound: true,
    biometric: false,
  });

  const handleToggle = (key: keyof SettingsState) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <MyView className="flex-1 py-safe">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Header */}
        <View className="px-4 mt-6 mb-8">
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
              <Ionicons
                name="settings-outline"
                size={26}
                colorClassName="accent-accent"
              />
            </View>
            <View className="flex-1">
              <MyText variant="title" className="text-foreground">
                {t("settings.title")}
              </MyText>
              <MyText className="text-muted-foreground text-sm mt-1">
                {t("settings.description")}
              </MyText>
            </View>
          </View>
        </View>

        {/* General Section */}
        <SettingsSection
          title={t("settings.sections.general.title")}
          icon="person-outline"
        >
          <Dialog
            renderTrigger={({ openDialog }) => (
              <SettingItem
                icon="language-outline"
                title={t("settings.sections.general.options.language.label")}
                description={t(
                  "settings.sections.general.options.language.description",
                )}
                onPress={openDialog}
              />
            )}
          >
            <DialogTitle>{t("language.cta.switch")}</DialogTitle>
            <DialogContent>
              <View className="py-5">
                <SwitchLanguage />
              </View>
            </DialogContent>
            <DialogActions>
              <View className="flex-row items-center justify-between w-full">
                <CancelButton className="p-2" />
                <CancelButton label="Confirm" className="p-2" />
              </View>
            </DialogActions>
          </Dialog>
          {/* <SettingItem
            icon="help-circle-outline"
            title="Help & Support"
            description="Get help or report issues"
            onPress={() => {}}
          />
          <SettingItem
            icon="document-outline"
            title="Terms of Service"
            description="View our terms and conditions"
            onPress={() => {}}
          /> */}
        </SettingsSection>

        {/* Privacy & Security Section */}
        {/* <SettingsSection
          title="Privacy & Security"
          icon="shield-checkmark-outline"
        >
          <SettingItem
            icon="lock-closed-outline"
            title="Private Mode"
            description="Hide sensitive meal information"
            value={settings.privateMode}
            onValueChange={() => handleToggle("privateMode")}
          />
          <SettingItem
            icon="finger-print-outline"
            title="Biometric Login"
            description="Use fingerprint or face recognition"
            value={settings.biometric}
            onValueChange={() => handleToggle("biometric")}
          />
          <SettingItem
            icon="document-text-outline"
            title="Privacy Policy"
            description="Read our privacy policy"
            onPress={() => {}}
          />
        </SettingsSection> */}

        {/* About Section */}
        <SettingsSection
          title={t("settings.sections.about.title")}
          icon="information-circle-outline"
        >
          <View className="px-4 py-4 rounded-xl bg-card border border-border gap-3">
            <View>
              <MyText className="text-muted-foreground text-xs font-semibold uppercase tracking-wide mb-1">
                {t("settings.sections.about.appVersion")}
              </MyText>
              <MyText className="text-foreground font-medium">
                {getAppVersion()}
              </MyText>
            </View>
            <View className="border-t border-border pt-3" />
            <View>
              <MyText className="text-muted-foreground text-xs font-semibold uppercase tracking-wide mb-1">
                {t("settings.sections.about.buildNumber")}
              </MyText>
              <MyText className="text-foreground font-medium">
                {getAppBuild()}
              </MyText>
            </View>
          </View>
        </SettingsSection>

        {/* Footer Padding */}
        <View className="h-14" />
      </ScrollView>
    </MyView>
  );
}
