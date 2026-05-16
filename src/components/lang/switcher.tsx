import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

interface Lang {
  [key: string]: { nativeName: string };
}

const langs: Lang = {
  en: { nativeName: "English" },
  ki: { nativeName: "Kirundi" },
};

export function SwitchLanguage() {
  const { i18n } = useTranslation();

  return (
    <View>
      {Object.keys(langs).map((lang) => {
        return (
          i18n.language !== lang && (
            <Button
              key={lang}
              onPress={() => i18n.changeLanguage(lang)}
              className="ring-1 ring-muted py-1 px-2"
            >
              <Text className="text-primary text-lg">
                <Ionicons name="language-outline" size={15} />{" "}
                <Text className="ml-1">{langs[lang].nativeName}</Text>
              </Text>
            </Button>
          )
        );
      })}
    </View>
  );
}
