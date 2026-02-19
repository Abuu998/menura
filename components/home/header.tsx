import { cn } from "@/lib/utils";
import { Image, View } from "react-native";
import { MyText } from "../ui/defaults";
import { SwitchLanguage } from "../lang/switcher";

type HeaderProps = React.ComponentProps<typeof View>;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <View className={cn("mt-4 flex-row justify-between items-center", className)} {...props}>
      <View className="flex-row items-center">
        <Image
          source={require("@/assets/images/symble.png")}
          width={30}
          height={30}
          className="size-16 object-contain"
        />
        <MyText className="text-3xl font-semibold">Menura</MyText>
      </View>
      <SwitchLanguage />
    </View>
  );
}
