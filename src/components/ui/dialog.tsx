import { cn } from "#/src/lib/utils";
import { createContext, use, useState } from "react";
import { View } from "react-native";
import { Portal, Dialog as RawPaperDialog } from "react-native-paper";
import { withUniwind } from "uniwind";
import { Button } from "./button";
import { MyText } from "./defaults";

const PaperDialog = withUniwind(RawPaperDialog);
const PaperDialogTitle = withUniwind(RawPaperDialog.Title);
const PaperDialogContent = withUniwind(RawPaperDialog.Content);
const PaperDialogActions = withUniwind(RawPaperDialog.Actions);

interface DialogContextType {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  toggleDialog: () => void;
}

const DialogContext = createContext<DialogContextType>({
  open: false,
  openDialog: () => {},
  closeDialog: () => {},
  toggleDialog: () => {},
});

function useDialog() {
  const context = use(DialogContext);
  if (!context)
    throw new Error("useDialog must be used within a <Dialog /> Component");
  return context;
}

type DialogProps = {
  children: React.ReactNode;
  className?: string;
  renderTrigger: (ctx: DialogContextType) => React.ReactNode;
} & Omit<
  React.ComponentProps<typeof RawPaperDialog>,
  "visible" | "dismissable"
>;

function DialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const toggleDialog = () => setOpen((prev) => !prev);

  const contextValue = {
    open,
    openDialog,
    closeDialog,
    toggleDialog,
  };

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
}

function Dialog({ className, children, renderTrigger, ...props }: DialogProps) {
  const context = useDialog();
  return (
    <View>
      {renderTrigger(context)}
      <Portal>
        <PaperDialog
          visible={context.open}
          dismissable
          onDismiss={context.closeDialog}
          className={cn("bg-primary rounded-xl mx-4 mb-5 mt-auto", className)}
          {...props}
        >
          {children}
        </PaperDialog>
      </Portal>
    </View>
  );
}

function DialogTrigger({
  children,
  className,
  labelClassName,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <Button className={cn(className)} onPress={onPress}>
      <MyText className={cn("", labelClassName)}>{children}</MyText>
    </Button>
  );
}

function DialogTitle({
  children,
  className,
}: React.ComponentProps<typeof PaperDialogTitle>) {
  return (
    <PaperDialogTitle className={cn("", className)}>
      {children}
    </PaperDialogTitle>
  );
}

function DialogContent({
  className,
  ...props
}: React.ComponentProps<typeof PaperDialogContent>) {
  return <PaperDialogContent className={cn("w-full", className)} {...props} />;
}

function DialogActions({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PaperDialogActions>) {
  return (
    <PaperDialogActions
      className={cn("flex-row items-center gap-8 justify-end", className)}
      {...props}
    >
      {children}
    </PaperDialogActions>
  );
}

export {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProvider,
  DialogTitle,
  DialogTrigger,
  useDialog,
};
