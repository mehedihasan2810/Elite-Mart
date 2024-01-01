import Product from "@/components/pages-components/products/Product";
import styles from "@/scss/pages-styles/products/Products.module.scss";
import ProductsCollection from "@/models/products";
import dbConnect from "@/lib/dbConnect";

export type ProductType = {
  categories: [];
  _id: any;
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

export const metadata = {
  title: "Products - Elite Mart",
  description: "All Your Needs In One Place",
};

async function getData() {
  try {
    await dbConnect();
    const products = await ProductsCollection.find({});
    return { success: true, products };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

const Products = async () => {
  const data = await getData();

  if (!data.success && !data.products) {
    return (
      <main>
        <p>Something Went Wrong! {data.message}</p>
      </main>
    );
  }

  const { success, products } = data;

  return (
    <main className={styles.products_container}>
      <div className={styles.products_header}>
        <div className={styles.products_title}>
          <h1>Clothing</h1>
          <div>
            {success && products
              ? products.concat(products, products).length
              : "0"}
          </div>
        </div>

        <div className={styles.filter_sort_wrapper}>
          <div className={styles.filter_select}>
            <select>
              <option value="all">Filter</option>
              <option value="clothes">Clothes</option>
              <option value="shoes">Shoes</option>
            </select>
          </div>

          <div className={styles.sort_by_price}>
            <select>
              <option value="default">Sort by price</option>
              <option value="low-to-high">Low to high</option>
              <option value="high-to-low">High to low</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.products_grid_container}>
        {success && products ? (
          products.concat(products, products).map((product, i) => {
            return <Product key={product._id} product={product} index={i} />;
          })
        ) : (
          <h1>Something Went Wrong!</h1>
        )}
      </div>
    </main>
  );
};

export default Products;
