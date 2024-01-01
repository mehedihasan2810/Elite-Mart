import React from "react";
import styles from "@/scss/pages-styles/Home/Favorites.module.scss";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "@/hooks/global/useIsomorphicLayoutEffect";
import { favoriteBlurHash } from "./dummy-data/favorite-dummy";

// Register ScrollTrigger plugin from GSAP
gsap.registerPlugin(ScrollTrigger);

const Favorites = () => {
  useIsomorphicLayoutEffect(() => {
    // Create GSAP timeline for animating category header
    const tl = gsap.timeline({ paused: true });
    tl.to("#favorites-header-mask", { clipPath: "inset(0 0 0 100%)" });

    // Create ScrollTrigger to trigger animation based on scroll position
    ScrollTrigger.create({
      animation: tl,
      trigger: "#favorites-header-mask",
      start: "bottom bottom",
      end: "top 5%",
      scrub: true,
    });
    //
  }, []);

  return (
    <section className={styles.favorites_container}>

      {/* header of favorite section starts */}
      <div className={styles.favorites_headers_container}>
        <div className={styles.favorites_headers}>
          <div className={styles.favorites_headers_wrapper}>
            <h2>Most Favorites</h2>
            <h2
              id="favorites-header-mask"
              className={styles.favorites_header_mask}
            >
              Most Favorites
            </h2>
          </div>
          <p>from last month</p>
          <button>
            <Link href="/products">Get Yours</Link>
          </button>
        </div>
      </div>
      {/* header of favorite section ends */}
      
      {/* list of favorite products starts */}
      <div className={styles.favorites_wrapper}>
        <div className={styles.favorites_grid}>
          <div className={styles.item1}>
            <Image
              src="https://i.ibb.co/myq7V9y/favorite3.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              sizes="(max-width: 575px) 100vw, (max-width: 1023px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={favoriteBlurHash[0].blurHash}
            />
          </div>
          <div className={styles.item2}>
            <Image
              src="https://i.ibb.co/Xs1BR7g/favorite1.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              sizes="(max-width: 575px) 100vw, (max-width: 1023px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={favoriteBlurHash[1].blurHash}
            />
          </div>
          <div className={styles.item3}>
            <Image
              src="https://i.ibb.co/3Y5CkX7/favorite2.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              sizes="(max-width: 575px) 100vw, (max-width: 1023px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={favoriteBlurHash[2].blurHash}
            />
          </div>
        </div>
      </div>
      {/* list of favorite products ends */}
    </section>
  );
};

export default Favorites;
