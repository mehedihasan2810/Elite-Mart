"use client";
import React from "react";
import styles from "@/scss/pages-styles/Home/Hero.module.scss";
import Image from "next/image";
import useHero from "@/hooks/pages/Home/useHero";
import Link from "next/link";
import { heroProductData } from "./dummy-data/hero-dummy";

const Hero = () => {
  const { handleHeroGridPointerOver, handleHeroGridPointerLeave } = useHero();

  return (
    <>
      {/* ------------ Moving Elements ------------ */}
      <aside className={styles.hero_moving_elements} data-hero-moving-elements>
        {/* Cursor Movement */}
        <div className={styles.moving_cursor} data-moving-element>
          <Link href="#" data-moving-cursor-link>
            Shop
          </Link>
        </div>

        {/* Hero Product Titles */}
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
      {/* --------------------------------------------- */}

      {/* ------------ Hero Container ------------ */}
      <section className={styles.hero_container}>
        <Link href="/products">
          {/* ------------ Hero Product Grid ------------ */}
          <div
            onPointerOver={handleHeroGridPointerOver}
            onPointerLeave={handleHeroGridPointerLeave}
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
                  quality={100}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL={data.img1BlurHash}
                />
                <Image
                  src={data.img2}
                  alt={data.datasetValue}
                  quality={100}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL={data.img2BlurHash}
                />
              </div>
            ))}
          </div>
          {/* --------------------------------------------- */}
        </Link>
      </section>
    </>
  );
};

export default Hero;
