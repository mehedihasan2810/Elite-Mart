import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("<Home/>", () => {
  it("should Home component render properly", () => {
    render(<Home />);
     const header = screen.getByRole('heading');
     expect(header).toBeInTheDocument();
  });
  it("should have heading tag in Home component", () => {
    render(<Home />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
  });
});
