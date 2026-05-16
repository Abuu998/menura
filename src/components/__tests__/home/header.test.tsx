import { Header } from "@/components/home/header";
import { render } from "@testing-library/react-native";

describe("<Header />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Menura")).toBeTruthy();
  });

  it("should match the snapshot", () => {
    const snapshot = render(<Header />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
