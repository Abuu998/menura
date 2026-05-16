import { SwitchLanguage } from "@/components/lang/switcher";
import { render } from "@testing-library/react-native";

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (i18nKey: string) => i18nKey,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

describe("<SwitchLanguage />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<SwitchLanguage />);

    expect(getByText("English")).toBeTruthy();
  });
});
