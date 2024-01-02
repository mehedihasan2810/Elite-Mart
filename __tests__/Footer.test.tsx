import Footer from "@/components/shared-components/Footer";
import { render } from "@testing-library/react";

describe("<Products />", () => {
  test("Should render properly & match snapshot", () => {
    // ARRANGE
    const { asFragment } = render(<Footer />);

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });
});
