import { createContext, use, useState } from "react";
import { View } from "react-native";
import { Button } from "./button";

const DialogContext = createContext({
  open: false,
  openDialog: () => {},
  closeDialog: () => {},
});

const useDialog = () => {
  const context = use(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within a <Dialog /> Component");
  }

  return context;
};

function Dialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <DialogContext value={{ open, openDialog, closeDialog }}>
      <View className="flex-1 items-center justify-center absolute inset-0">
        <View className="rounded-lg p-5 shadow-lg">{children}</View>
      </View>
    </DialogContext>
  );
}

function DialogTrigger({ children }: { children: React.ReactNode }) {
  const { openDialog } = useDialog();
  return <Button onPress={openDialog}>{children}</Button>;
}

export { Dialog, DialogTrigger, useDialog };
