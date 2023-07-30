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
        { labelId: nanoid(), label: "New Arrivals", url: "/products" },
        { labelId: nanoid(), label: "Bestsellers", url: "/products" },
        { labelId: nanoid(), label: "Latest Product", url: "/products" },
        { labelId: nanoid(), label: "Latest Clothing", url: "/products" },
        { labelId: nanoid(), label: "Latest Sneekers", url: "/products" },
      ],
      new_for_men: [
        { labelId: nanoid(), label: "Shoes", url: "/products" },
        { labelId: nanoid(), label: "Clothing", url: "/products" },
        { labelId: nanoid(), label: "Accessories", url: "/products" },
      ],
      new_for_women: [
        { labelId: nanoid(), label: "Shoes", url: "/products" },
        { labelId: nanoid(), label: "Clothing", url: "/products" },
        { labelId: nanoid(), label: "Accessories", url: "/products" },
      ],
      new_for_kids: [
        { labelId: nanoid(), label: "Shoes", url: "/products" },
        { labelId: nanoid(), label: "Clothing", url: "/products" },
        { labelId: nanoid(), label: "Accessories", url: "/products" },
      ],
    },
  },
  {
    pageId: nanoid(),
    page: "Men",
    data: {
      featured: [
        { labelId: nanoid(), label: "New Arrivals", url: "/products" },
        { labelId: nanoid(), label: "Bestsellers", url: "/products" },
        { labelId: nanoid(), label: "Latest Product", url: "/products" },
        { labelId: nanoid(), label: "Latest Clothing", url: "/products" },
        { labelId: nanoid(), label: "Latest Sneekers", url: "/products" },
      ],
      shoes: [
        { labelId: nanoid(), label: "Shoes", url: "/products" },
        { labelId: nanoid(), label: "Jordan", url: "/products" },
        { labelId: nanoid(), label: "Addidas", url: "/products" },
        { labelId: nanoid(), label: "Nike", url: "/products" },
      ],
      clothes: [
        { labelId: nanoid(), label: "All Cothing", url: "/products" },
        { labelId: nanoid(), label: "Shirt & Pants", url: "/products" },
        { labelId: nanoid(), label: "Shorts", url: "/products" },
        { labelId: nanoid(), label: "Jersey", url: "/products" },
        { labelId: nanoid(), label: "Jacket", url: "/products" },
      ],
    },
  },
  {
    pageId: nanoid(),
    page: "Women",
    data: {
      featured: [
        { labelId: nanoid(), label: "New Arrivals", url: "/products" },
        { labelId: nanoid(), label: "Bestsellers", url: "/products" },
        { labelId: nanoid(), label: "Latest Product", url: "/products" },
        { labelId: nanoid(), label: "Latest Clothing", url: "/products" },
        { labelId: nanoid(), label: "Latest Sneekers", url: "/products" },
      ],
      shoes: [
        { labelId: nanoid(), label: "Shoes", url: "/products" },
        { labelId: nanoid(), label: "Jordan", url: "/products" },
        { labelId: nanoid(), label: "Addidas", url: "/products" },
        { labelId: nanoid(), label: "Nike", url: "/products" },
      ],
      clothes: [
        { labelId: nanoid(), label: "All Clothing", url: "/products" },
        { labelId: nanoid(), label: "Skirt", url: "/products" },
        { labelId: nanoid(), label: "Sports Bras", url: "/products" },
        { labelId: nanoid(), label: "Jersey", url: "/products" },
        { labelId: nanoid(), label: "Hoodies", url: "/products" },
      ],
    },
  },
  {
    pageId: nanoid(),
    page: "Kids",
    data: {
      featured: [
        { labelId: nanoid(), label: "New Arrivals", url: "/products" },
        { labelId: nanoid(), label: "Bestsellers", url: "/products" },
        { labelId: nanoid(), label: "Latest Product", url: "/products" },
        { labelId: nanoid(), label: "Latest Clothing", url: "/products" },
        { labelId: nanoid(), label: "Latest Sneekers", url: "/products" },
      ],
      shoes: [
        { labelId: nanoid(), label: "Shoes", url: "/products" },
        { labelId: nanoid(), label: "Jordan", url: "/products" },
        { labelId: nanoid(), label: "Addidas", url: "/products" },
        { labelId: nanoid(), label: "Nike", url: "/products" },
      ],
      clothes: [
        { labelId: nanoid(), label: "All Cothing", url: "/products" },
        { labelId: nanoid(), label: "Shirt & Pants", url: "/products" },
        { labelId: nanoid(), label: "Shorts", url: "/products" },
        { labelId: nanoid(), label: "Jersey", url: "/products" },
        { labelId: nanoid(), label: "Jacket", url: "/products" },
      ],
    },
  },
  {
    pageId: nanoid(),
    page: "Sale",
    data: {
      featured: [
        { labelId: nanoid(), label: "Clothing", url: "/products" },
        { labelId: nanoid(), label: "Shoes", url: "/products" },
      ],
      mens: [
        { labelId: nanoid(), label: "Shoes", url: "/products" },
        { labelId: nanoid(), label: "Jordan", url: "/products" },
        { labelId: nanoid(), label: "Addidas", url: "/products" },
        { labelId: nanoid(), label: "Nike", url: "/products" },
      ],
      womens: [
        { labelId: nanoid(), label: "Shoes", url: "/products" },
        { labelId: nanoid(), label: "Jordan", url: "/products" },
        { labelId: nanoid(), label: "Addidas", url: "/products" },
        { labelId: nanoid(), label: "Nike", url: "/products" },
      ],
      kids: [
        { labelId: nanoid(), label: "Shirt & Pants", url: "/products" },
        { labelId: nanoid(), label: "Shorts", url: "/products" },
        { labelId: nanoid(), label: "Jersey", url: "/products" },
        { labelId: nanoid(), label: "Jacket", url: "/products" },
      ],
    },
  },
];
