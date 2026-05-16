import { cn } from "@/lib/utils";
import { Tabs } from "expo-router";
import { useCSSVariable, useResolveClassNames } from "uniwind";
import { Ionicons } from "@expo/vector-icons";
import { tabs } from "@/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Text } from "react-native";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  // const tabBarStyle = useResolveClassNames(cn("bg-background border-border h-[78px] pt-1"));
  const tabBarStyle = useResolveClassNames(
    cn(
      "bg-card absolute border-t-0 elevation-1 mx-5 h-18 rounded-full bg-primary/60",
      `bottom-5`,
    ),
  );
  const tabBarIconStyle = useResolveClassNames(cn("self-center rounded-full my-4"));
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
  );
}

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
    <View
      className={cn("size-12 rounded-full items-center justify-center", {
        "bg-background": focused,
      })}
    >
      <Text
        className={cn("text-muted-foreground", {
          "text-foreground": focused,
        })}
      >
        <Ionicons name={icon} size={30} />
      </Text>
    </View>
  );
}
