import { Button } from "../ui/button";
import { MyText } from "../ui/defaults";
import { useDialog } from "../ui/dialog";

type CancelButtonProps = {
  label?: string;
  labelClassName?: string;
} & React.ComponentProps<typeof Button>;

export function CancelButton({
  label = "Cancel",
  labelClassName,
  ...props
}: CancelButtonProps) {
  const { closeDialog } = useDialog();
  return (
    <Button {...props} onPress={closeDialog}>
      <MyText className={labelClassName}>{label}</MyText>
    </Button>
  );
}
