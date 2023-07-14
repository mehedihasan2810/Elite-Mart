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
    title: "Kids Buddy",
    datasetValue: "kid-shoes",
    img1: "https://i.ibb.co/C9RCHN1/kids-shoes2.jpg",
    img2: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
  },
  {
    id: nanoid(),
    title: "Kids Happiness",
    datasetValue: "kid-clothes",
    img1: "https://i.ibb.co/sR0ZdQs/kids2.jpg",
    img2: "https://i.ibb.co/VYbhCX9/kids1.jpg",
  },
  {
    id: nanoid(),
    title: "Women Power",
    datasetValue: "women-clothes",
    img1: "https://i.ibb.co/mG54Kwq/pexels-photo-2.jpg",
    img2: "https://i.ibb.co/NSw7N5b/pexels-photo-5.jpg",
  },
  {
    id: nanoid(),
    title: "Women Freedom",
    datasetValue: "women-shoes",
    img1: "https://i.ibb.co/FsQGVPG/women-shoes2.jpg",
    img2: "https://i.ibb.co/FqdB0tS/women-shoes3.webp",
  },
  {
    id: nanoid(),
    title: "Men Strength",
    datasetValue: "men-shoes",
    img1: "https://i.ibb.co/r4Dk0kt/shoes3.jpg",
    img2: "https://i.ibb.co/QM6KDh9/shoes4.jpg",
  },
  {
    id: nanoid(),
    title: "Men Inspiration",
    datasetValue: "men-clothes",
    img1: "https://i.ibb.co/k2B5xRw/men-clothes-1.webp",
    img2: "https://i.ibb.co/J3KByKq/men-clothes-2.jpg",
  },
  {
    id: nanoid(),
    title: "Your Favorite",
    datasetValue: "featured-clothes",
    img1: "https://i.ibb.co/Jc8LNqF/featured-clothes-2.webp",
    img2: "https://i.ibb.co/Df30CyD/featured-clothes-1.webp",
  },
  {
    id: nanoid(),
    title: "Your Joy",
    datasetValue: "featured-shoes",
    img1: "https://i.ibb.co/R2Ghc4c/men-shoes-3.jpg",
    img2: "https://i.ibb.co/1s5Z7yC/arrival-shoes-1.jpg",
  },
];

const Hero = () => {
  // const heroGridRef = useRef<HTMLDivElement>(null!);

  const { handleHeroGridPointerOver, handleHeroGridPointerLeave } = useHero();

  return (
    <>
      {/* moving elements */}
      <aside className={styles.hero_moving_elements} data-hero-moving-elements>
        <div className={styles.moving_cursor} data-moving-element>
          <Link href="#" data-moving-cursor-link>
            Shop
          </Link>
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
      </aside>
      {/*  */}

      <section className={styles.hero_container}>
        <div
          onPointerOver={handleHeroGridPointerOver}
          onPointerLeave={handleHeroGridPointerLeave}
          // ref={heroGridRef}
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
                priority
                quality={100}
                fill
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
              />
              <Image
                src={data.img2}
                alt={data.datasetValue}
                priority
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
