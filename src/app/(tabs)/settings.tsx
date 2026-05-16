import { useState } from "react";
import { ScrollView, View } from "react-native";
import { MyText, MyView } from "@/components/ui/defaults";
import { SettingItem } from "@/components/settings/item";
import { SettingsSection } from "@/components/settings/section";
import { Ionicons as RawIconicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { withUniwind } from "uniwind";
import { router } from "expo-router";

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
              <Ionicons name="settings" size={26} colorClassName="text-primary" />
            </View>
            <View className="flex-1">
              <MyText variant="title" className="text-foreground">
                {t("settings.title")}
              </MyText>
              <MyText className="text-muted-foreground text-sm mt-1">
                Customize your app experience
              </MyText>
            </View>
          </View>
        </View>

        {/* Display & Theme Section */}
        <SettingsSection title="Display & Theme" icon="palette">
          <SettingItem
            icon="moon"
            title="Dark Mode"
            description="Enable dark theme for better night viewing"
            value={settings.darkMode}
            onValueChange={() => handleToggle("darkMode")}
          />
          <SettingItem
            icon="contrast"
            title="High Contrast"
            description="Increase visual contrast for readability"
            value={false}
            onValueChange={() => {}}
          />
          <SettingItem
            icon="text"
            title="Text Size"
            description="Adjust text size for better readability"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Notifications & Sound Section */}
        <SettingsSection title="Notifications & Sound" icon="notifications-sharp">
          <SettingItem
            icon="notifications"
            title="Enable Notifications"
            description="Receive updates and meal reminders"
            value={settings.notifications}
            onValueChange={() => handleToggle("notifications")}
          />
          <SettingItem
            icon="volume-high"
            title="Sound & Vibration"
            description="Alert sounds and haptic feedback"
            value={settings.sound}
            onValueChange={() => handleToggle("sound")}
          />
          <SettingItem
            icon="time"
            title="Daily Reminder"
            description="Set a daily reminder to log meals"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Privacy & Security Section */}
        <SettingsSection title="Privacy & Security" icon="shield-checkmark-sharp">
          <SettingItem
            icon="lock-closed"
            title="Private Mode"
            description="Hide sensitive meal information"
            value={settings.privateMode}
            onValueChange={() => handleToggle("privateMode")}
          />
          <SettingItem
            icon="finger-print"
            title="Biometric Login"
            description="Use fingerprint or face recognition"
            value={settings.biometric}
            onValueChange={() => handleToggle("biometric")}
          />
          <SettingItem
            icon="document-text"
            title="Privacy Policy"
            description="Read our privacy policy"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Data & Storage Section */}
        <SettingsSection title="Data & Storage" icon="cloud-sharp">
          <SettingItem
            icon="cloud"
            title="Cloud Sync"
            description="Automatically sync your data"
            value={settings.dataSync}
            onValueChange={() => handleToggle("dataSync")}
          />
          <SettingItem
            icon="download"
            title="Backup & Restore"
            description="Manage your data backups"
            onPress={() => {}}
          />
          <SettingItem
            icon="trash"
            title="Clear Cache"
            description="Free up storage space"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* General Section */}
        <SettingsSection title="General" icon="settings-sharp">
          <SettingItem
            icon="language"
            title="Language"
            description="English"
            onPress={() => {}}
          />
          <SettingItem
            icon="help-circle"
            title="Help & Support"
            description="Get help or report issues"
            onPress={() => {}}
          />
          <SettingItem
            icon="document"
            title="Terms of Service"
            description="View our terms and conditions"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* About Section */}
        <SettingsSection title="About" icon="information-circle-sharp">
          <View className="px-4 py-4 rounded-xl bg-card border border-border gap-3">
            <View>
              <MyText className="text-muted-foreground text-xs font-semibold uppercase tracking-wide mb-1">
                App Version
              </MyText>
              <MyText className="text-foreground font-medium">v1.0.0</MyText>
            </View>
            <View className="border-t border-border pt-3" />
            <View>
              <MyText className="text-muted-foreground text-xs font-semibold uppercase tracking-wide mb-1">
                Build Number
              </MyText>
              <MyText className="text-foreground font-medium">2024.001</MyText>
            </View>
          </View>
          <SettingItem
            icon="chatbubble"
            title="Send Feedback"
            description="Help us improve the app"
            onPress={() => {}}
          />
          <SettingItem
            icon="help-circle"
            title="About Us"
            description="Learn more about our app"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Quick Access Section */}
        <SettingsSection title="Quick Access" icon="history">
          <SettingItem
            icon="time"
            title="Meal History"
            description="View your past meals and statistics"
            onPress={() => router.push("/history")}
          />
          <SettingItem
            icon="star"
            title="Favorites"
            description="Manage your favorite meals"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Footer Padding */}
        <View className="h-8" />
      </ScrollView>
    </MyView>
  );
}
