import { cn } from "@/lib/utils";
import { Text, Pressable } from "react-native";

type ButtonProps = React.ComponentProps<typeof Pressable>;

export default function Button({ className, ...props }: ButtonProps) {
  return <Pressable className={cn("text-lg font-medium rounded-md", className)} {...props} />;
}
