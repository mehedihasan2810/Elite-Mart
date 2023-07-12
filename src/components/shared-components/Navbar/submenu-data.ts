import { nanoid } from "@reduxjs/toolkit";

export const sublinks = [
  {
    pageId: nanoid(),
    page: "product",
    links: [
      {
        id: nanoid(),
        label: "community",

        url: "/product/community",
      },
      {
        id: nanoid(),
        label: "content",

        url: "/product/content",
      },
      {
        id: nanoid(),
        label: "roles",

        url: "/product/roles",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "solutions",
    links: [
      {
        id: nanoid(),
        label: "developers",

        url: "/solutions/developers",
      },
      {
        id: nanoid(),
        label: "content managers",

        url: "/solutions/content-managers",
      },
      {
        id: nanoid(),
        label: "business teams",

        url: "/solutions/business teams",
      },
      {
        id: nanoid(),
        label: "ecommerce",

        url: "/solutions/ecommerce",
      },
    ],
  },
  {
    page: "resources",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "starters",

        url: "/resources/starters",
      },
      {
        id: nanoid(),
        label: "showcase",

        url: "/resources/showcase",
      },
    ],
  },
];

export const submenuData = [
  {
    pageId: nanoid(),
    page: "Featured",
    data: {
      new: [
        { labelId: nanoid(), label: "New Arrivals", url: "#" },
        { labelId: nanoid(), label: "Bestsellers", url: "#" },
        { labelId: nanoid(), label: "Latest Product", url: "#" },
        { labelId: nanoid(), label: "Latest Clothing", url: "#" },
        { labelId: nanoid(), label: "Latest Sneekers", url: "#" },
      ],
      new_for_men: [
        { labelId: nanoid(), label: "Shoes", url: "#" },
        { labelId: nanoid(), label: "Clothing", url: "#" },
        { labelId: nanoid(), label: "Accessories", url: "#" },
      ],
      new_for_women: [
        { labelId: nanoid(), label: "Shoes", url: "#" },
        { labelId: nanoid(), label: "Clothing", url: "#" },
        { labelId: nanoid(), label: "Accessories", url: "#" },
      ],
      new_for_kids: [
        { labelId: nanoid(), label: "Shoes", url: "#" },
        { labelId: nanoid(), label: "Clothing", url: "#" },
        { labelId: nanoid(), label: "Accessories", url: "#" },
      ],
    },
  },
  {
    pageId: nanoid(),
    page: "Men",
    data: {
      featured: [
        { labelId: nanoid(), label: "New Arrivals", url: "#" },
        { labelId: nanoid(), label: "Bestsellers", url: "#" },
        { labelId: nanoid(), label: "Latest Product", url: "#" },
        { labelId: nanoid(), label: "Latest Clothing", url: "#" },
        { labelId: nanoid(), label: "Latest Sneekers", url: "#" },
      ],
      shoes: [
        { labelId: nanoid(), label: "Shoes", url: "#" },
        { labelId: nanoid(), label: "Jordan", url: "#" },
        { labelId: nanoid(), label: "Addidas", url: "#" },
        { labelId: nanoid(), label: "Nike", url: "#" },
      ],
      clothes: [
        { labelId: nanoid(), label: "All Cothing", url: "#" },
        { labelId: nanoid(), label: "Shirt & Pants", url: "#" },
        { labelId: nanoid(), label: "Shorts", url: "#" },
        { labelId: nanoid(), label: "Jersey", url: "#" },
        { labelId: nanoid(), label: "Jacket", url: "#" },
      ],
    },
  },
  {
    pageId: nanoid(),
    page: "Women",
    data: {
      featured: [
        { labelId: nanoid(), label: "New Arrivals", url: "#" },
        { labelId: nanoid(), label: "Bestsellers", url: "#" },
        { labelId: nanoid(), label: "Latest Product", url: "#" },
        { labelId: nanoid(), label: "Latest Clothing", url: "#" },
        { labelId: nanoid(), label: "Latest Sneekers", url: "#" },
      ],
      shoes: [
        { labelId: nanoid(), label: "Shoes", url: "#" },
        { labelId: nanoid(), label: "Jordan", url: "#" },
        { labelId: nanoid(), label: "Addidas", url: "#" },
        { labelId: nanoid(), label: "Nike", url: "#" },
      ],
      clothes: [
        { labelId: nanoid(), label: "All Clothing", url: "#" },
        { labelId: nanoid(), label: "Skirt", url: "#" },
        { labelId: nanoid(), label: "Sports Bras", url: "#" },
        { labelId: nanoid(), label: "Jersey", url: "#" },
        { labelId: nanoid(), label: "Hoodies", url: "#" },
      ],
    },
  },
  {
    pageId: nanoid(),
    page: "Kids",
    data: {
      featured: [
        { labelId: nanoid(), label: "New Arrivals", url: "#" },
        { labelId: nanoid(), label: "Bestsellers", url: "#" },
        { labelId: nanoid(), label: "Latest Product", url: "#" },
        { labelId: nanoid(), label: "Latest Clothing", url: "#" },
        { labelId: nanoid(), label: "Latest Sneekers", url: "#" },
      ],
      shoes: [
        { labelId: nanoid(), label: "Shoes", url: "#" },
        { labelId: nanoid(), label: "Jordan", url: "#" },
        { labelId: nanoid(), label: "Addidas", url: "#" },
        { labelId: nanoid(), label: "Nike", url: "#" },
      ],
      clothes: [
        { labelId: nanoid(), label: "All Cothing", url: "#" },
        { labelId: nanoid(), label: "Shirt & Pants", url: "#" },
        { labelId: nanoid(), label: "Shorts", url: "#" },
        { labelId: nanoid(), label: "Jersey", url: "#" },
        { labelId: nanoid(), label: "Jacket", url: "#" },
      ],
    },
  },
  {
    pageId: nanoid(),
    page: "Sale",
    data: {
      featured: [
        { labelId: nanoid(), label: "Clothing", url: "#" },
        { labelId: nanoid(), label: "Shoes", url: "#" },
      ],
      mens: [
        { labelId: nanoid(), label: "Shoes", url: "#" },
        { labelId: nanoid(), label: "Jordan", url: "#" },
        { labelId: nanoid(), label: "Addidas", url: "#" },
        { labelId: nanoid(), label: "Nike", url: "#" },
      ],
      womens: [
        { labelId: nanoid(), label: "Shoes", url: "#" },
        { labelId: nanoid(), label: "Jordan", url: "#" },
        { labelId: nanoid(), label: "Addidas", url: "#" },
        { labelId: nanoid(), label: "Nike", url: "#" },
      ],
      kids: [
        { labelId: nanoid(), label: "Shirt & Pants", url: "#" },
        { labelId: nanoid(), label: "Shorts", url: "#" },
        { labelId: nanoid(), label: "Jersey", url: "#" },
        { labelId: nanoid(), label: "Jacket", url: "#" },
      ],
    },
  },
];
