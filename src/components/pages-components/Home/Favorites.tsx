import React, { useLayoutEffect } from "react";
import styles from "@/scss/pages-styles/Home/Favorites.module.scss";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Favorites = () => {
  useLayoutEffect(() => {
    //  animate category header with gsap
    const tl = gsap.timeline({ paused: true });
    tl.to("#favorites-header-mask", { clipPath: "inset(0 0 0 100%)" });

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
    <div className={styles.favorites_container}>
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
        <button><Link href="/products">Get Yours</Link></button>
      </div>
      </div>

      <div className={styles.favorites_wrapper}>
        <div className={styles.favorites_grid}>
          <div className={styles.item1}>
            <Image
              src="https://i.ibb.co/myq7V9y/favorite3.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
            />
          </div>
          <div className={styles.item2}>
            <Image
              src="https://i.ibb.co/Xs1BR7g/favorite1.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
            />
          </div>
          <div className={styles.item3}>
            <Image
              src="https://i.ibb.co/3Y5CkX7/favorite2.jpg"
              alt="a group of model having fun wearing our most favorite clothes of this month"
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
