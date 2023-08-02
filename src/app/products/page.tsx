import Product from "@/components/pages-components/products/Product";
import styles from "@/scss/pages-styles/products/Products.module.scss";
// import { getServerSession } from "next-auth";
import React from "react";
// import { options } from "../api/auth/[...nextauth]/options";
import getToken from "@/utilities/getToken";

export type ProductType = {
  categories: [];
  _id: string;
  name: string;
  model_number: string;
  release_date: string;
  price: number;
  color: string;
  sizes: [];
  description: string;
  image_url: string;
  product_status: string;
  categories_1: string;
  categories_2: string[];
  rating: number;
  reviews: { username: string; rating: number; comment: string }[];
  created_at: string;
  updated_at: string;
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/products", {
    headers: {
      authorization: getToken(),
    },
    cache: "no-store",
  });

  return res.json();
}

const Products = async () => {
  // const session = await getServerSession(options);
  // const { success, data } = await getData();
  // console.log(data);
  // console.log(success);
  const success = false;
  const data: any = [];
  return (
    <main className={styles.products_container}>
      <div className={styles.products_header}>
        <div className={styles.products_title}>
          <h1>Clothing</h1>
          <div>(4201)</div>
        </div>

        <div className={styles.filter_sort_wrapper}>
          <div>Filter</div>
          <div>Sort</div>
        </div>
      </div>

      <div className={styles.products_grid_container}>
        {success ? (
          data
            .concat(data, data)
            .map((product: ProductType) => (
              <Product key={product._id} {...product} />
            ))
        ) : (
          <h1>Something Went Wrong!</h1>
        )}
      </div>
    </main>
  );
};

export default Products;
