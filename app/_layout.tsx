import { SafeAreaListener } from "react-native-safe-area-context";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { MyText, MyView } from "@/components/ui/defaults";
import { Uniwind, withUniwind } from "uniwind";
import { Stack } from "expo-router";
import { expo as expoDb, db } from "@/lib/db/index";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import migrations from "@/drizzle/migrations";
// import * as SplashScreen from "expo-splash-screen";
import "@/lib/i18n";
import "../global.css";
import { ActivityIndicator as RawActivityIndicator } from "react-native-paper";

const ActivityIndicator = withUniwind(RawActivityIndicator);

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  useDrizzleStudio(expoDb);

  if (error) {
    return (
      <MyView className="py-safe flex-1 items-center justify-center">
        <MyText className="text-destructive-foreground">
          Migration error: {error.message}
        </MyText>
      </MyView>
    );
  }
  if (!success) {
    return (
      <MyView className="py-safe flex-1 items-center justify-center">
        <ActivityIndicator colorClassName="accent-primary" animating size="large" />
        <MyText>Migration is in progress...</MyText>
      </MyView>
    );
  }

  return (
    <SafeAreaListener
      onChange={({ insets }) => {
        Uniwind.updateInsets(insets);
      }}
    >
      <Stack screenOptions={{ headerShown: false }} initialRouteName="(tabs)" />
    </SafeAreaListener>
  );
}
