import React from "react";
import styles from "@/scss/pages-styles/Home/Category.module.scss";
import useCategory from "@/hooks/pages/Home/useCategory";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "@/hooks/global/useIsomorphicLayoutEffect";
import {
  headerBtnData,
  sliderBestRatedData,
  sliderBestSellersData,
  sliderTrendingData,
} from "./dummy-data/category-dummy";

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

const Category = () => {
  // rest of the logical code separated inside of this useCategory hook
  const sliderData = useCategory();

  useIsomorphicLayoutEffect(() => {
    //  animate category header
    const tl = gsap.timeline({ paused: true });
    tl.to("#category-header-mask", { clipPath: "inset(0 0 0 100%)" });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#category-header-mask",
      start: "bottom bottom",
      end: "top 5%",
      scrub: true,
    });
    //
  }, []);

  return (
    <section className={styles.category_container}>
      {/* Header contents start */}
      <div className={styles.category_headers_container}>
        <div className={styles.category_headers}>
          <div className={styles.category_headers_wrapper}>
            <h2>Get 50% Off</h2>
            <h2
              id="category-header-mask"
              className={styles.category_header_mask}
            >
              Get 50% Off
            </h2>
          </div>
          <p>On all our Trending, Best Sellers and Best Rated</p>
          <button>
            <Link href="/products">Grab Yours Now</Link>{" "}
          </button>
        </div>
      </div>
      {/* Header contents end */}

      {/* Slider starts */}
      <div className={styles.slider_container}>
        <div className={styles.slider_btns_wrapper}>
          <div data-header-btns className={styles.header_btns}>
            {headerBtnData.map((data) => (
              <button key={data.id} data-header-btn={data.datasetValue}>
                <span>{data.textContent}</span>
                <span>{data.textContent}</span>
              </button>
            ))}
          </div>

          <div className={styles.slide_btns}>
            <button data-slide-btn="prev" aria-label="Previous">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button data-slide-btn="next" aria-label="Next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          data-category-slider-wrapper
          className={styles.category_slider_wrapper}
        >
          <div data-category-slider className={styles.category_slider}>
            {(sliderData === "trending"
              ? sliderTrendingData
              : sliderData === "best-sellers"
              ? sliderBestSellersData
              : sliderBestRatedData
            ).map((data, index) => (
              <div
                key={data.id}
                data-category-slide={index}
                data-category-duplicate-slide={index}
                className={styles.slide}
              >
                <figure>
                  <Image
                    src={data.url}
                    alt={data.url}
                    quality={100}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1500px) 33vw, 25vw"
                    placeholder="blur"
                    blurDataURL={data.blurHash}
                  />
                </figure>
              </div>
            ))}
            {(sliderData === "trending"
              ? sliderTrendingData
              : sliderData === "best-sellers"
              ? sliderBestSellersData
              : sliderBestRatedData
            ).map((data, index) => (
              <div
                key={data.id}
                data-category-slide={index}
                className={styles.slide}
              >
                <figure>
                  <Image
                    src={data.url}
                    alt={data.url}
                    quality={100}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1500px) 33vw, 25vw"
                    placeholder="blur"
                    blurDataURL={data.blurHash}
                  />
                </figure>
              </div>
            ))}

            {(sliderData === "trending"
              ? sliderTrendingData
              : sliderData === "best-sellers"
              ? sliderBestSellersData
              : sliderBestRatedData
            ).map((data, index) => (
              <div
                key={data.id}
                data-category-slide={index}
                data-category-duplicate-slide={index}
                className={styles.slide}
              >
                <figure>
                  <Image
                    src={data.url}
                    alt={data.url}
                    quality={100}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1500px) 33vw, 25vw"
                    placeholder="blur"
                    blurDataURL={data.blurHash}
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Slider starts */}
    </section>
  );
};

export default Category;
