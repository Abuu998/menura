import { StateCreator } from "zustand";
import { SettingsSliceType } from "../slices";

export type MainStoreType = SettingsSliceType;

export type StoreSliceType<T> = StateCreator<
  MainStoreType,
  [
    // ["zustand/immer", never],
    ["zustand/persist", unknown],
    // ["zustand/devtools", never],
  ],
  [],
  T
>;
