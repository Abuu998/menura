import { GlobalErrorFallback } from "@/components/error/global-fallback";
import { MyText, MyView } from "@/components/ui/defaults";
import { db, expo as expoDb } from "@/lib/db/index";
import "@/lib/i18n";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Stack } from "expo-router";
import { ErrorBoundary } from "react-error-boundary";
import { ActivityIndicator as RawActivityIndicator } from "react-native-paper";
import { SafeAreaListener } from "react-native-safe-area-context";
import ToastManager from "toastify-react-native";
import { Uniwind, withUniwind } from "uniwind";
import migrations from "../../drizzle/migrations";
import "../global.css";

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
        <ActivityIndicator
          colorClassName="accent-primary"
          animating
          size="large"
        />
        <MyText>Migration is in progress...</MyText>
      </MyView>
    );
  }

  return (
    <>
      <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
        <SafeAreaListener
          onChange={({ insets }) => {
            Uniwind.updateInsets(insets);
          }}
        >
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaListener>
      </ErrorBoundary>
      <ToastManager />
    </>
  );
}
