import Search from "@/components/shared-components/Navbar/Search";
import { render, screen } from "@testing-library/react";


describe("<Search/>", () => {
  test("should Search component render Properly with a search field and placeholder text should be Search", () => {
    render(<Search />);
    const searchField = screen.getByPlaceholderText("Search products...");

    expect(searchField).toBeInTheDocument();
  });
});
