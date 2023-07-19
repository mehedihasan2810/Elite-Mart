import React, { useLayoutEffect } from "react";
import styles from "@/scss/pages-styles/Home/Category.module.scss";
import useCategory from "@/hooks/pages/Home/useCategory";
import { nanoid } from "@reduxjs/toolkit";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const headerBtnData = [
  {
    id: nanoid(),
    textContent: "Trending",
    datasetValue: "trending",
  },
  {
    id: nanoid(),
    textContent: "Best Sellers",
    datasetValue: "best-sellers",
  },
  {
    id: nanoid(),
    textContent: "Best Rated",
    datasetValue: "best-rated",
  },
];

const sliderTrendingData = [
  {
    id: nanoid(),
    url: "https://i.ibb.co/QM6KDh9/shoes4.jpg",
    alt: "shoes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/FsQGVPG/women-shoes2.jpg",
    alt: "shoes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/FqdB0tS/women-shoes3.webp",
    alt: "shoes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/r4Dk0kt/shoes3.jpg",
    alt: "shoes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/vZMkBz4/shoes2.webp",
    alt: "shoes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
    alt: "shoes",
  },
];
const sliderBestSellersData = [
  {
    id: nanoid(),
    url: "https://i.ibb.co/k02pQ8M/slider1.jpg",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/H73Z8rT/slider7.jpg",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/0MZtHS6/slider2.jpg",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/7Xh7cNB/slider8.webp",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/VmDmvmd/slider3.jpg",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/vHgK7fF/slider12.jpg",
    alt: "clothes",
  },
];
const sliderBestRatedData = [
  {
    id: nanoid(),
    url: "https://i.ibb.co/tK63JgY/slider4.jpg",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/GVtq4Yy/slider5.webp",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/RBJz4R8/slider10.jpg",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/4WQHkBN/slider11.jpg",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/DGnfBPg/slider9.webp",
    alt: "clothes",
  },
  {
    id: nanoid(),
    url: "https://i.ibb.co/fnBK2Fp/slider6.webp",
    alt: "clothes",
  },
];

const Category = () => {
  // rest of the logical code separated inside of this useCategory hook
  const sliderData = useCategory();


  useLayoutEffect(() => {
     //  animate category header with gsap
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
  }, [])

  return (
    <section className={styles.category_container}>
      <div className={styles.category_headers}>
        <div className={styles.category_headers_wrapper}>
        <h2>Get 50% Off</h2>
        <h2 id="category-header-mask" className={styles.category_header_mask}>Get 50% Off</h2>

        </div>
        <p>On all our Trending, Best Sellers and Best Rated</p>
           <button>Grab Yours Now</button>
      </div>
      
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
            <button data-slide-btn="prev">
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
            <button data-slide-btn="next">
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
                    priority
                    quality={100}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
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
                    priority
                    quality={100}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
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
                    priority
                    quality={100}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
