import SubMenu from "@/components/shared-components/Navbar/SubMenu";
import { render, screen } from "@testing-library/react";

const data = {
  new: [
    { labelId: "1", label: "New Arrivals", url: "/products" },
    { labelId: "1", label: "Bestsellers", url: "/products" },
    { labelId: "1", label: "Latest Product", url: "/products" },
    { labelId: "1", label: "Latest Clothing", url: "/products" },
    { labelId: "1", label: "Latest Sneekers", url: "/products" },
  ],
  new_for_men: [
    { labelId: "1", label: "Shoes", url: "/products" },
    { labelId: "1", label: "Clothing", url: "/products" },
    { labelId: "1", label: "Accessories", url: "/products" },
  ],
  new_for_women: [
    { labelId: "1", label: "Shoes", url: "/products" },
    { labelId: "1", label: "Clothing", url: "/products" },
    { labelId: "1", label: "Accessories", url: "/products" },
  ],
  new_for_kids: [
    { labelId: "1", label: "Shoes", url: "/products" },
    { labelId: "1", label: "Clothing", url: "/products" },
    { labelId: "1", label: "Accessories", url: "/products" },
  ],
};

describe("<Products />", () => {
  test("Should render properly & match snapshot", () => {
    // ARRANGE
    const { asFragment } = render(
      <SubMenu
        className=""
        datasetSubmenu="featured"
        data={data}
        onSubmenuLeave={jest.fn()}
      />
    );

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });

  test("Featured link should be visible", () => {
    // ARRANGE
    render(
      <SubMenu
        className={""}
        datasetSubmenu="featured"
        data={data}
        onSubmenuLeave={jest.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: "New For Men", level: 6 })
    ).toBeInTheDocument();
  });
});
