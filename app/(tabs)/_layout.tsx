import { cn } from "@/lib/utils";
import { Tabs } from "expo-router";
import { useCSSVariable, useResolveClassNames } from "uniwind";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  const tabBarStyle = useResolveClassNames(cn("bg-background border-border h-[78px] pt-1"));
  const tabBarIconStyle = useResolveClassNames(cn("size-12"));
  const tabBarActiveTintColor = useCSSVariable("--color-primary") as string;
  const tabBarInactiveTintColor = useCSSVariable("--color-muted") as string;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle,
        tabBarShowLabel: false,
        tabBarIconStyle,
        tabBarActiveTintColor,
        tabBarInactiveTintColor,
      }}
    >
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? "time" : "time-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
