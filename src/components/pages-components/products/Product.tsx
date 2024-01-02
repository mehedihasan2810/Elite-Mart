import { ProductType } from "@/app/products/page";
import styles from "@/scss/pages-styles/products/Product.module.scss";
import Image from "next/image";
import Link from "next/link";
import { blurDataURLs } from "./data";

const Product = ({
  product,
  index,
}: {
  product: ProductType;
  index: number;
}) => {
  const { _id, name, image_url, price, categories_1, product_status } = product;

  const blurHash = blurDataURLs.concat(blurDataURLs, blurDataURLs);

  return (
    <figure aria-labelledby="title12" className={styles.product_container}>
      <Link href={`/products/${_id}`}>
        <div className={styles.product_img_wrapper}>
          <Image
            src={image_url}
            alt={name}
            fill
            sizes="(max-width: 840px) 100vw, (max-width: 1260px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={blurHash[index].blurHash}
          />
        </div>

        <figcaption>
          <div className={styles.product_desc}>
            <div className={styles.product_desc_left}>
              <p className={styles.product_status}>{product_status}</p>
              <p id="title12" className={styles.product_title}>
                {name}
              </p>
              <p className={styles.product_category}>{categories_1}</p>
            </div>

            <div className={styles.product_desc_right}>
              <p className={styles.product_price}>${price}</p>
              <button
                aria-label="Add to favorite"
                className={styles.product_favorite}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-hidden={true}
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
          <button className={styles.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              style={{ width: "24px", height: "24px" }}
              aria-hidden={true}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span>Add to cart</span>
          </button>
        </figcaption>
      </Link>
    </figure>
  );
};

export default Product;
