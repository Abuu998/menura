import { cn } from "@/lib/utils";
import { useMyStore } from "@/store";
import { Ionicons as RNIcon } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { withUniwind } from "uniwind";
import { Button } from "../ui/button";
import { MyText } from "../ui/defaults";

interface Lang {
  [key: string]: { nativeName: string };
}

const langs: Lang = {
  en: { nativeName: "English" },
  ki: { nativeName: "Kirundi" },
};

const Ionicons = withUniwind(RNIcon);

export function SwitchLanguage() {
  const { i18n } = useTranslation();
  const changeLanguage = useMyStore((state) => state.changeLanguage);

  const isCurrentLang = (lang: string) => {
    return i18n.language === lang;
  };

  const onSelectLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    changeLanguage({ name: langs[lang].nativeName, code: lang });
  };

  return (
    <View className="gap-4">
      {Object.keys(langs).map((lang) => {
        return (
          <Button
            key={lang}
            onPress={() => onSelectLanguage(lang)}
            className={cn("flex-row justify-between gap-3 px-4 py-4", {
              "bg-muted/70": isCurrentLang(lang),
            })}
          >
            <MyText className="text-lg">{langs[lang].nativeName}</MyText>
            {isCurrentLang(lang) && (
              <Ionicons
                name="checkmark-outline"
                size={24}
                colorClassName="accent-accent"
              />
            )}
          </Button>
        );
      })}
    </View>
  );
}
