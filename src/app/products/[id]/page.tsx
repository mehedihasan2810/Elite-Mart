"use client";
import React from "react";
import styles from "@/scss/pages-styles/product-details/ProductDetails.module.scss";
import Image from "next/image";
import useProductDetails from "@/hooks/pages/ProductDetails/useProductDetails";
import { useGetProductQuery } from "@/redux/createApi/createApi";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const {
    data: productData,
    isLoading,
    isError,
  } = useGetProductQuery(params.id);

  function addProductIdsToCookies() {
    const id: string = productData.data._id;
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([id]));

      toast.success("Added Succesfully", {
        autoClose: 2000,
      });
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") as string);
      if (cart.includes(id)) {
        toast.warning("You have Already Added This One!", {
          autoClose: 2000,
        });
        return;
      } else {
        const cartCloned = cart.slice();
        cartCloned.push(id);
        localStorage.setItem("cart", JSON.stringify(cartCloned));
        toast.success("Added Succesfully", {
          autoClose: 2000,
        });
      }
    }
  }

  const { handleOptionImg, pushDisplayImgRef, pushOptionImgRef } =
    useProductDetails();

  if (isError) {
    return <h2>Error: Something went wrong</h2>;
  }

  return (
    <main>
      <section className={styles.product_details_container}>
        <div className={styles.product_details_left_wrapper}>
          <div className={styles.display_img_wrapper}>
            {isLoading ? (
              <Skeleton style={{ width: "100%", height: "100%" }} />
            ) : (
              Array.from({ length: 3 }).map((item, index) => (
                <Image
                  key={index}
                  src={productData.data.image_url}
                  data-display-img={index}
                  ref={pushDisplayImgRef}
                  alt="jacket"
                  quality={100}
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                />
              ))
            )}
          </div>
          <div className={styles.display_img_options_wrapper}>
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className={styles.display_img_option}>
                    <Skeleton
                      key={index}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ))
              : Array.from({ length: 3 }).map((item, index) => (
                  <div key={index} className={styles.display_img_option}>
                    <Image
                      src={productData.data.image_url}
                      ref={pushOptionImgRef}
                      onPointerEnter={handleOptionImg}
                      alt="jacket"
                      data-display-option-img={index}
                      quality={100}
                      fill
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                    />
                  </div>
                ))}
          </div>
        </div>

        <div className={styles.product_details_right_wrapper}>
          <h2 className={styles.product_details_title}>
            {isLoading ? (
              <Skeleton style={{ width: "70%" }} />
            ) : (
              productData.data.name
            )}
          </h2>
          <h2 className={styles.product_details_category}>
            {isLoading ? (
              <Skeleton style={{ width: "50%" }} />
            ) : (
              productData.data.categories_1
            )}
          </h2>
          <div className={styles.product_details_price}>
            {isLoading ? (
              <Skeleton style={{ width: "40%" }} />
            ) : (
              `$${productData.data.price}`
            )}
          </div>

          <div className={styles.sizes_container}>
            <h2>Sizes</h2>
            <div className={styles.sizes_grid}>
              <div>UK 6</div>
              <div>UK 6.5</div>
              <div>UK 7</div>
              <div>UK 7.5</div>
              <div>UK 8</div>
              <div>UK 8.5</div>
              <div>UK 9</div>
              <div>UK 9.5</div>
              <div>UK 10</div>
              <div>UK 10.5</div>
              <div>UK 11.5</div>
              <div>UK 12</div>
            </div>
          </div>

          <div className={styles.btns}>
            <button>Buy Now</button>
            <button disabled={isLoading} onClick={addProductIdsToCookies}>
              Add To Cart
            </button>
            <button>Add To Favorite</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
