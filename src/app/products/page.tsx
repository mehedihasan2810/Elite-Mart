import Product from "@/components/pages-components/products/Product";
import styles from "@/scss/pages-styles/products/Products.module.scss";
import React from "react";

const Products = () => {
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
        {Array.from({ length: 10 }).map((data, index) => (
          <Product key={index} />
        ))}
      </div>
    </main>
  );
};

export default Products;
