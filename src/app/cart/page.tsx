"use client";
import React from "react";
import styles from "@/scss/pages-styles/Cart/Cart.module.scss";
import Image from "next/image";
import useCart from "@/hooks/pages/Cart/useCart";
import { useGetCartProductsQuery } from "@/redux/createApi/createApi";
import { ProductType } from "../products/page";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Cart = () => {
  function getCartProductIds() {
    if (typeof window !== "undefined") {
      const cartProductIds: string[] | null =
        localStorage.getItem("cart") &&
        JSON.parse(localStorage.getItem("cart") as string);
      return cartProductIds;
    } else {
      return null;
    }
  }

  const { data, isLoading, isError, refetch } = useGetCartProductsQuery(
    getCartProductIds(),
    {
      skip: !getCartProductIds(),
    }
  );

  function handleRemoveCartProduct(id: string) {
    const cartProductIds = getCartProductIds();
    if (cartProductIds) {
      const arr = cartProductIds.filter((cartId) => cartId !== id);
      if (arr.length) {
        localStorage.setItem("cart", JSON.stringify(arr));
        refetch();
        toast.success("Removed Succesfully", {
          autoClose: 2000,
        });
      } else {
        localStorage.clear();
        refetch();
        toast.success("Removed Succesfully", {
          autoClose: 2000,
        });
      }
    }
  }

  const { totalWrapperRef, cartWrapperRef } = useCart();

  if (isError) {
    <p>Error: Something went wrong!</p>;
  }

  return (
    <main className={styles.cart_main}>
      <section className={styles.cart_container}>
        <div ref={cartWrapperRef} className={styles.left_container}>
          <div className={styles.cart_item_count}>
            {getCartProductIds()
              ? `You have added ${
                  isLoading
                    ? "0"
                    : data?.cartProducts?.length
                    ? data?.cartProducts?.length
                    : "0"
                } product in the cart!`
              : `You have added 0 product in the cart!`}
          </div>
          {isLoading || typeof window === "undefined"
            ? Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className={styles.cart_item}>
                  <div className={styles.left_wrapper}>
                    <div className={styles.img_wrapper}>
                      <Skeleton style={{ width: "100%", height: "100%" }} />
                    </div>

                    <div className={styles.product_info_wrapper}>
                      <h3>
                        {" "}
                        <Skeleton style={{ width: "100%" }} />
                      </h3>
                      <div>
                        {" "}
                        <Skeleton style={{ width: "100%" }} />
                      </div>
                      <div>White</div>

                      <div className={styles.btns_wrapper}>
                        <button>
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
                        <button>
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
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.info_right}>
                    <div className={styles.price}>
                      {" "}
                      <Skeleton style={{ width: "50px" }} />
                    </div>
                  </div>
                </div>
              ))
            : getCartProductIds() &&
              data?.success &&
              data.cartProducts.map((product: ProductType) => (
                <div key={product._id} className={styles.cart_item}>
                  <div className={styles.left_wrapper}>
                    <div className={styles.img_wrapper}>
                      <Image
                        src={product.image_url}
                        alt="jacket"
                        quality={100}
                        fill
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                      />
                    </div>

                    <div className={styles.product_info_wrapper}>
                      <h3>{product.name}</h3>
                      <div>{product.categories_1}</div>
                      <div>White</div>

                      <div className={styles.btns_wrapper}>
                        <button disabled aria-label="Add to favorite">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleRemoveCartProduct(product._id)}
                          aria-label="Delete the cart item"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.info_right}>
                    <div className={styles.price}>${product.price}</div>
                  </div>
                </div>
              ))}
        </div>

        <div ref={totalWrapperRef} className={styles.right_container}>
          {/* <h2>Summery</h2> */}
          <div className={styles.total_delivery_charge}>
            <div>
              <div>Subtotal</div>
              <div>
                {" "}
                {getCartProductIds()
                  ? `$${
                      isLoading
                        ? "00"
                        : data?.cartProducts?.reduce(
                            (acc: number, product: ProductType) =>
                              acc + product.price,
                            0
                          )
                    }`
                  : `$00`}
              </div>
            </div>
            <div>
              <div>Delivery Charge</div>
              <div>
                {getCartProductIds()
                  ? `$${isLoading ? "00" : data?.cartProducts?.length * 5}`
                  : `$00`}
              </div>
            </div>
          </div>

          <div className={styles.total_wrapper}>
            <div>Total</div>
            <div>
              {getCartProductIds()
                ? `$${
                    isLoading
                      ? "00"
                      : data?.cartProducts?.reduce(
                          (acc: number, product: ProductType) =>
                            acc + product.price,
                          0
                        ) +
                        data?.cartProducts?.length * 5
                  }`
                : `$00`}
            </div>
          </div>

          {/* <div className={styles.btns}> */}
          <button className={styles.checkout_btn}>Checkout</button>
          {/* </div> */}
        </div>
      </section>
    </main>
  );
};

export default Cart;
