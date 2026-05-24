import { Ionicons as RNIcon } from "@expo/vector-icons";
import { type FallbackProps } from "react-error-boundary";
import { withUniwind } from "uniwind";
import { Button } from "../ui/button";
import { MyText, MyView } from "../ui/defaults";

const Ionicons = withUniwind(RNIcon);

export function GlobalErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <MyView className="py-safe flex-1 items-center justify-center px-5">
      <Ionicons
        name="warning-outline"
        colorClassName="accent-destructive/70"
        className="text-8xl"
      />
      <MyView className="mt-5 items-center">
        <MyText className="text-5xl font-bold">Oops! 🤭</MyText>
        <MyText className="text-muted-foreground text-center mt-1">
          This was not supposed to happen.
        </MyText>
        <MyText className="text-muted-foreground text-center">
          Please try again.
        </MyText>
        <Button
          onPress={resetErrorBoundary}
          className="mt-4 py-3 px-6 rounded-lg bg-slate-950"
        >
          <MyText className="text-center text-white">Retry</MyText>
        </Button>
      </MyView>
    </MyView>
  );
}
