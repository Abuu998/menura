import { cn } from "#/src/lib/utils";
import { Dish } from "@/lib/db/schema";
import { RadioButton } from "react-native-paper";
import { withUniwind } from "uniwind";

type DishWithCheckProps = {
  dish: Dish;
  className?: string;
};

const Radio = withUniwind(RadioButton.Item);

export function DishWithCheck({ className, dish }: DishWithCheckProps) {
  return (
    <Radio
      value={dish.id}
      label={dish.name}
      colorClassName="accent-accent"
      uncheckedColorClassName="accent-muted-foreground"
      labelClassName="text-base text-foreground font-raleway text-start ml-2 truncate"
      position="leading"
      className={cn("self-start", className)}
    />
  );
}
