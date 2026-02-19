import { Dish } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { MyText } from "./defaults";
import { withUniwind } from "uniwind";
import { Button } from "./button";
import { RadioButton } from "react-native-paper";

type DishWithRadioProps = {
  dish: Dish;
  className?: string;
};

const Radio = withUniwind(RadioButton);

export function DishWithCheck({ className, dish }: DishWithRadioProps) {
  return (
    <Button className={cn("flex-row items-center gap-2", className)}>
      <Radio
        value={dish.id}
        colorClassName="accent-primary"
        uncheckedColorClassName="accent-primary/40"
      />
      <MyText className="text-lg">{dish.name}</MyText>
    </Button>
  );
}
