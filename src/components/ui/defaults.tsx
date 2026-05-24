import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Text, View } from "react-native";

export function MyView({
  className,
  ...props
}: React.ComponentProps<typeof View>) {
  return <View className={cn("bg-background", className)} {...props} />;
}

const myTextVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "text-lg font-raleway",
      title: "font-semibold text-2xl font-raleway-semi",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type MyTextProps = VariantProps<typeof myTextVariants> &
  React.ComponentProps<typeof Text>;

export function MyText({ className, variant, ...props }: MyTextProps) {
  return (
    <Text className={cn(myTextVariants({ variant, className }))} {...props} />
  );
}
