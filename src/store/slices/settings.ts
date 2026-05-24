import { Language } from "@/types";
import { StoreSliceType } from "../utils/types";

type SettingsState = {
  language: Language;
};

type SettingsActions = {
  changeLanguage: (lang: Language) => void;
};

export type SettingsSliceType = SettingsState & SettingsActions;

const initialLanguage: Language = {
  name: "Kirundi",
  code: "ki",
};

export const settingsSlice: StoreSliceType<SettingsSliceType> = (set) => ({
  language: initialLanguage,
  changeLanguage(language) {
    set({ language });
  },
});
