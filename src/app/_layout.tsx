import migrations from "#/drizzle/migrations";
import { GlobalErrorFallback } from "@/components/error/global-fallback";
import { MyText, MyView } from "@/components/ui/defaults";
import { db, expo as expoDb } from "@/lib/db/index";
import "@/lib/i18n";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ActivityIndicator as RawActivityIndicator } from "react-native-paper";
import { SafeAreaListener } from "react-native-safe-area-context";
import { Uniwind, withUniwind } from "uniwind";
import "../global.css";
import { useLoadFonts } from "../hooks/fonts";
import { useSeedDatabase } from "../hooks/seed-database";

const ActivityIndicator = withUniwind(RawActivityIndicator);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  const { loading, error: seedError } = useSeedDatabase();
  const fontLoaded = useLoadFonts();
  useDrizzleStudio(expoDb);

  useEffect(() => {
    if (success && !loading && fontLoaded) {
      void SplashScreen.hideAsync();
    }
  }, [success, loading, fontLoaded]);

  if (error) {
    return (
      <MyView className="py-safe flex-1 items-center justify-center">
        <MyText className="text-destructive-foreground">
          Migration error: {error.message}
        </MyText>
      </MyView>
    );
  }

  if (seedError) {
    return (
      <MyView className="py-safe flex-1 items-center justify-center">
        <MyText className="text-destructive-foreground">
          Seeding error: {seedError.message}
        </MyText>
      </MyView>
    );
  }

  if (!success || loading) {
    return (
      <MyView className="py-safe flex-1 items-center justify-center">
        <ActivityIndicator
          colorClassName="accent-accent"
          animating
          size="large"
        />
        <MyText className="text-center text-2xl mt-2">
          Getting things Ready...
        </MyText>
      </MyView>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
      <SafeAreaListener
        onChange={({ insets }) => {
          Uniwind.updateInsets(insets);
        }}
      >
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaListener>
    </ErrorBoundary>
  );
}
