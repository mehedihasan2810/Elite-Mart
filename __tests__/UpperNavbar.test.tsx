import UpperNavbar from "@/components/shared-components/Navbar/UpperNavbar";
import { render, screen } from "@testing-library/react";

describe("<UpperNavbar/>", () => {
  test("should UpperNavbar component render properly and USD text and flag img should be in the document", () => {
    // ARRANGE
    const { asFragment } = render(<UpperNavbar />);

    // ACT
    const USD = screen.getByText("USD");
    const flag = screen.getByTestId("flag");

    // ASSERT
    expect(USD).toBeInTheDocument();
    expect(flag).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  test("there should be 4 Link", () => {
    // ARRANGE
    const { asFragment } = render(<UpperNavbar />);

    // ACT
    const linkList = screen.getAllByRole("link");

    // ASSERT
    expect(linkList).toHaveLength(4);
    expect(asFragment()).toMatchSnapshot();
  });
});
