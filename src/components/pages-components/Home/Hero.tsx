"use client";
import React, { useRef } from "react";
import styles from "@/scss/pages-styles/Home/Hero.module.scss";
import Image from "next/image";
import useHero from "@/hooks/pages/Home/useHero";
import { nanoid } from "@reduxjs/toolkit";
import Link from "next/link";

const heroProductData = [
  {
    id: nanoid(),
    title: "Kid Inspiration",
    datasetValue: "kid-shoes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
  {
    id: nanoid(),
    title: "Kid Power",
    datasetValue: "kid-clothes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
  {
    id: nanoid(),
    title: "Women Power",
    datasetValue: "women-clothes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
  {
    id: nanoid(),
    title: "Women Inspiration",
    datasetValue: "women-shoes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
  {
    id: nanoid(),
    title: "Men Inspiration",
    datasetValue: "men-shoes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
  {
    id: nanoid(),
    title: "Men Power",
    datasetValue: "men-clothes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
  {
    id: nanoid(),
    title: "Featured Clothes",
    datasetValue: "featured-clothes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
  {
    id: nanoid(),
    title: "Featured Shoes",
    datasetValue: "featured-shoes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
];

const Hero = () => {
  const heroGridRef = useRef<HTMLDivElement>(null!);
  // const movingElementRef = useRef<HTMLDivElement>(null!)

  const { handleHeroGridPointerOver, handleHeroGridPointerLeave } = useHero();

  return (
    <>
      {/* moving element */}
      <aside className={styles.hero_moving_elements} data-hero-moving-elements>
        <div className={styles.moving_cursor} data-moving-element>
          <Link href="#" data-moving-cursor-link>Shop</Link>
        </div>
        {heroProductData.map((data) => (
          <div
            key={data.id}
            data-hero-title
            data-hero-product-title={data.datasetValue}
          >
            {data.title}
          </div>
        ))}

        {/* <div className={styles.moving_cursor} data-moving-element>
          Shop
        </div>
        <div data-hero-title data-hero-product-title="kid-shoes">
          Kid Inspiration
        </div>
        <div data-hero-title data-hero-product-title="kid-clothes">
          Kid Power
        </div>
        <div data-hero-title data-hero-product-title="women-clothes">
          Women Power
        </div>
        <div data-hero-title data-hero-product-title="women-shoes">
          Women Inspiration
        </div>
        <div data-hero-title data-hero-product-title="men-clothes">
          Men Power
        </div>
        <div data-hero-title data-hero-product-title="men-shoes">
          Men Inspiration
        </div>
        <div data-hero-title data-hero-product-title="featured-clothes">
          Featured Inspiration
        </div>
        <div data-hero-title data-hero-product-title="featured-shoes">
          Featured Power
        </div> */}
      </aside>
      {/*  */}

      <section className={styles.hero_container}>
        <div
          onPointerOver={handleHeroGridPointerOver}
          onPointerLeave={handleHeroGridPointerLeave}
          ref={heroGridRef}
          data-hero-grid-element
          className={styles.hero_grid}
        >
          {heroProductData.map((data) => (
            <div
              key={data.id}
              data-hero-grid-child
              data-hero-product-title={data.datasetValue}
            >
              <Image
                src={data.img1}
                alt={data.datasetValue}
                // priority
                quality={100}
                fill
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
              />
              <Image
                src={data.img2}
                alt={data.datasetValue}
                // priority
                quality={100}
                fill
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
              />
            </div>
          ))}

          {/* <div data-hero-grid-child data-hero-product-title="kid-shoes">
            <Image
              src="https://i.ibb.co/C9RCHN1/kids-shoes2.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
            <Image
              src="https://i.ibb.co/Kbj76cj/kids-shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
          </div> */}
          {/* <div data-hero-grid-child data-hero-product-title="kid-clothes">
            <Image
              src="https://i.ibb.co/sR0ZdQs/kids2.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
            <Image
              src="https://i.ibb.co/Kbj76cj/kids-shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
          </div>
          <div data-hero-grid-child data-hero-product-title="women-clothes">
            <Image
              src="https://i.ibb.co/mG54Kwq/pexels-photo-2.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
            <Image
              src="https://i.ibb.co/Kbj76cj/kids-shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
          </div>
          <div data-hero-grid-child data-hero-product-title="women-shoes">
            <Image
              src="https://i.ibb.co/r4Dk0kt/shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
            <Image
              src="https://i.ibb.co/Kbj76cj/kids-shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
          </div>
          <div data-hero-grid-child data-hero-product-title="men-shoes">
            <Image
              src="https://i.ibb.co/vZMkBz4/shoes2.webp"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
            <Image
              src="https://i.ibb.co/Kbj76cj/kids-shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
          </div>
          <div data-hero-grid-child data-hero-product-title="men-clothes">
            <Image
              src="https://i.ibb.co/NSw7N5b/pexels-photo-5.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
            <Image
              src="https://i.ibb.co/Kbj76cj/kids-shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
          </div>
          <div data-hero-grid-child data-hero-product-title="featured-clothes">
            <Image
              src="https://i.ibb.co/VYbhCX9/kids1.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
            <Image
              src="https://i.ibb.co/Kbj76cj/kids-shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
          </div>
          <div data-hero-grid-child data-hero-product-title="featured-shoes">
            <Image
              src="https://i.ibb.co/QM6KDh9/shoes4.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
            <Image
              src="https://i.ibb.co/Kbj76cj/kids-shoes3.jpg"
              alt="kids shoes"
              // priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
