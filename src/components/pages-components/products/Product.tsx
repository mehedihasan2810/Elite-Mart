import { ProductType } from "@/app/products/page";
import styles from "@/scss/pages-styles/products/Product.module.scss";
import Image from "next/image";
import Link from "next/link";
const Product = (product: ProductType) => {
  const { _id, name, image_url, price, categories_1, product_status } = product;
  console.log(product);
  return (
    <figure className={styles.product_container}>
      <Link href={`/products/${_id}`}>
        <div className={styles.product_img_wrapper}>
          <Image
            src={image_url}
            alt={name}
            priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
          />
        </div>

        <figcaption>
          <div className={styles.product_desc}>
            <div className={styles.product_desc_left}>
              <p className={styles.product_status}>{product_status}</p>
              <p className={styles.product_title}>{name}</p>
              <p className={styles.product_category}>{categories_1}</p>
            </div>

            <div className={styles.product_desc_right}>
              <p className={styles.product_price}>${price}</p>
              <button className={styles.product_favorite}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </figcaption>
      </Link>
    </figure>
  );
};

export default Product;
