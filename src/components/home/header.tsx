import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Image, View } from "react-native";
import { MyText } from "../ui/defaults";

type HeaderProps = React.ComponentProps<typeof View>;

export function Header({ className, ...props }: HeaderProps) {
  const { t } = useTranslation();

  return (
    <View
      className={cn("mt-4 flex-row justify-between items-center", className)}
      {...props}
    >
      <View className="flex-row items-center">
        <Image
          source={require("@/assets/images/symble.png")}
          width={30}
          height={30}
          className="size-16 object-contain -ml-2"
        />
        <View className="w-full">
          <MyText
            variant="title"
            className="text-xl font-semibold tracking-wide"
          >
            {t("home.greet.main")}
          </MyText>
          <MyText className="text-sm text-muted-foreground">
            {t("home.greet.sub")}
          </MyText>
        </View>
      </View>
    </View>
  );
}
