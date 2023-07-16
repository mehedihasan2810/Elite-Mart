import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("<Home/>", () => {
  test("should Home component render properly", () => {
    render(<Home />);
  });
});
