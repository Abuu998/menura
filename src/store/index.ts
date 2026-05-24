import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { settingsSlice } from "./slices";
import { mmkvStorage } from "./utils";
import { MainStoreType } from "./utils/types";

export const useMyStore = create<MainStoreType>()(
  persist(
    (...a) => ({
      ...settingsSlice(...a),
    }),
    {
      name: "menura-main-store",
      storage: createJSONStorage(() => mmkvStorage),
      partialize(state) {
        return {
          language: state.language,
        };
      },
    },
  ),
);
