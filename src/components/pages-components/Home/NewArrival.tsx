import React from "react";
import styles from "@/scss/pages-styles/Home/NewArrival.module.scss";
import Image from "next/image";
import { nanoid } from "@reduxjs/toolkit";
import useNewArrival from "@/hooks/pages/Home/useNewArrival";

const arrivalImgData = [
  {
    id: nanoid(),
    imgUrl: "https://i.ibb.co/0Fqzwq6/arrival-group1.jpg",
    dataArrivalImg: "arrival-img-1",
  },
  {
    id: nanoid(),
    imgUrl: "https://i.ibb.co/NtvP9JM/arrival-group2.webp",
    dataArrivalImg: "arrival-img-2",
  },
  {
    id: nanoid(),
    imgUrl: "https://i.ibb.co/WV0Jp2f/arrival-group3.webp",
    dataArrivalImg: "arrival-img-3",
  },
  {
    id: nanoid(),
    imgUrl: "https://i.ibb.co/YtsKyVB/arrival-group4.jpg",
    dataArrivalImg: "arrival-img-4",
  },
  {
    id: nanoid(),
    imgUrl: "https://i.ibb.co/F47H2dr/arrival-group-5.jpg",
    dataArrivalImg: "arrival-img-5",
  },
];

const NewArrival = () => {
  const {handleSmallImgClick} = useNewArrival();

  return (
    <section className={styles.new_arrival_container}>
      <div className={styles.new_arrival_headers}>
        <p>Vibe With Our</p>
        <div className={styles.arrival_headers}>
        <h2>New Arrivals</h2>
        <h2 id="arrival-header-mask" className={styles.arrival_header_mask}>New Arrivals</h2>
        </div>
           <button>Shop Now</button>
      </div>
      <div data-arrival-small-img-wrapper>
        {arrivalImgData.map((item) => (
          <div key={item.id} data-arrival-img-parent={item.dataArrivalImg}>
            <Image
              // key={item.id} 
              onClick={handleSmallImgClick}
              src={item.imgUrl}
              alt={item.dataArrivalImg}
              data-arrival-img={item.dataArrivalImg}
              priority
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
            />
          </div>
        ))}

      </div>
      <div data-arrival-img-wrapper className={styles.arrival_img_wrapper}>
        {arrivalImgData.map((item) => (
          <Image
            key={item.id}
            src={item.imgUrl}
            alt={item.dataArrivalImg}
            data-arrival-img={item.dataArrivalImg}
            priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
