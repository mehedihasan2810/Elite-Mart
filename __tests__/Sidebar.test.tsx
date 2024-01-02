import Sidebar from "@/components/shared-components/Sidebar/Sidebar";
import { render, screen } from "@testing-library/react";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn().mockReturnValue({
    isSidebarVisible: true,
    isSubSidebarVisible: false,
  }),
}));

describe("<Sidebar />", () => {
  test("Should render properly & match snapshot", () => {
    // ARRANGE
    const { asFragment } = render(<Sidebar />);

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });

  test("Category link should be visible", () => {
    // ARRANGE
    render(<Sidebar />);

    // ASSERT
    expect(screen.getByText("Clothing")).toBeVisible();
    ["Featured", "Men", "Women", "Kids", "Sale"].forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
