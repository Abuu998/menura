import { cn } from "@/lib/utils";
import { View, Text } from "react-native";
import { cva, VariantProps } from "class-variance-authority";

type MyViewProps = {} & React.ComponentProps<typeof View>;

export function MyView({ className, ...props }: MyViewProps) {
  return <View className={cn("bg-background", className)} {...props} />;
}

const myTextVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "text-lg",
      title: "font-semibold text-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type MyTextProps = VariantProps<typeof myTextVariants> & React.ComponentProps<typeof Text>;

export function MyText({ className, variant, ...props }: MyTextProps) {
  return <Text className={cn(myTextVariants({ variant, className }))} {...props} />;
}
