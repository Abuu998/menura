import { render } from "@testing-library/react-native";
import { MyText, MyView } from "@/components/ui/defaults";

describe("<MyText />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<MyText>Hello World!</MyText>);
    expect(getByText("Hello World!")).toBeTruthy();
  });
});

describe("<MyView />", () => {
  it("renders correctly", () => {
    const comp = render(<MyView />).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
