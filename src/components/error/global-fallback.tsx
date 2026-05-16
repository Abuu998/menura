import { type FallbackProps, getErrorMessage } from "react-error-boundary";
import { Button } from "../ui/button";
import { MyText, MyView } from "../ui/defaults";

export function GlobalErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <MyView className="py-safe flex-1 items-center justify-center px-5">
      <MyView className="p-5 rounded-md absolute w-90% ring ring-destructive">
        <MyText className="text-5xl font-bold">Oops!</MyText>
        <MyText className="text-destructive-foreground">
          {getErrorMessage(error)}
        </MyText>
        <Button
          onPress={resetErrorBoundary}
          className="mt-4 py-3 px-6 rounded-md"
        >
          <MyText className="">Try again</MyText>
        </Button>
      </MyView>
    </MyView>
  );
}
