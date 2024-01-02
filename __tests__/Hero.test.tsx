import Hero from "@/components/pages-components/Home/Hero";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Hero />", () => {
  test("Should render properly & match snapshot", () => {
    // ARRANGE
    const { asFragment } = render(<Hero />);

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });

  test("there should be 16 images in the hero section", async () => {
    // EVENT
    const user = userEvent.setup();

    // ARRANGE
    render(<Hero />);

    // ACT
    await user.hover(screen.getByTestId("hero-grid"));

    // ASSERT
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(16);
  });
});
