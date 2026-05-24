import { DialogProvider } from "#/src/components/ui/dialog";
import { tabs } from "@/constants";
import { cn } from "@/lib/utils";
import { Ionicons as RNIonicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import ToastManager from "toastify-react-native";
import { useResolveClassNames, withUniwind } from "uniwind";

export default function TabsLayout() {
  const tabBarStyle = useResolveClassNames(
    cn("absolute border-t-0 mx-5 h-18 rounded-full bg-primary", `bottom-5`),
  );
  const tabBarIconStyle = useResolveClassNames(
    cn("self-center rounded-full my-4"),
  );

  return (
    <DialogProvider>
      <PaperProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle,
            tabBarShowLabel: false,
            tabBarIconStyle,
          }}
        >
          {tabs.map((tab) => {
            return (
              <Tabs.Screen
                key={tab.name}
                name={tab.name}
                options={{
                  title: tab.title,
                  tabBarIcon: ({ focused, size, color }) => (
                    <TabBarIcon
                      focused={focused}
                      icon={focused ? tab.activeIcon : tab.icon}
                      color={color}
                    />
                  ),
                }}
              />
            );
          })}
        </Tabs>

        <ToastManager
          theme="dark"
          showProgressBar={false}
          showCloseIcon={false}
        />
      </PaperProvider>
    </DialogProvider>
  );
}

const Ionicons = withUniwind(RNIonicons);

function TabBarIcon({
  focused,
  icon,
  color,
}: {
  focused: boolean;
  icon: (typeof tabs)[number]["icon" | "activeIcon"];
  color: string;
}) {
  return (
    <View className={cn("size-12 rounded-full items-center justify-center")}>
      <Ionicons
        name={icon}
        size={30}
        colorClassName={cn("accent-muted-foreground/50", {
          "accent-accent": focused,
        })}
      />
    </View>
  );
}
