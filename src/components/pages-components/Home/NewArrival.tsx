import styles from "@/scss/pages-styles/Home/NewArrival.module.scss";
import Image from "next/image";
import useNewArrival from "@/hooks/pages/Home/useNewArrival";
import Link from "next/link";
import { arrivalImgData } from "./dummy-data/new-arrival-dummy";

const NewArrival = () => {
  // Destructure the handleSmallImgClick function from the custom hook
  const { handleSmallImgClick } = useNewArrival();

  return (
    <section className={styles.new_arrival_container}>
      {/*---------- Header elements start -------------- */}
      <div className={styles.new_arrival_headers_wrapper}>
        <div className={styles.new_arrival_headers}>
          <p>Vibe With Our</p>
          <div className={styles.arrival_headers}>
            <h2>New Arrivals</h2>
            <h2 id="arrival-header-mask" className={styles.arrival_header_mask}>
              New Arrivals
            </h2>
          </div>
          <button>
            <Link href="/products">Shop Now</Link>{" "}
          </button>
        </div>
      </div>
      {/*---------- Header elements end -------------- */}

      {/*---------- CTA images start ------------*/}
      <div data-arrival-small-img-wrapper>
        {arrivalImgData.map((item) => (
          <div key={item.id} data-arrival-img-parent={item.dataArrivalImg}>
            <Image
              onClick={handleSmallImgClick}
              src={item.imgUrl}
              alt={item.dataArrivalImg}
              data-arrival-img={item.dataArrivalImg}
              quality={100}
              fill
              sizes="80px"
              placeholder="blur"
              blurDataURL={item.blurHash}
            />
          </div>
        ))}
      </div>
      {/*---------- CTA images end ------------*/}

      {/*---------- auto carousel images start ------------*/}
      <div data-arrival-img-wrapper className={styles.arrival_img_wrapper}>
        {arrivalImgData.map((item) => (
          <Image
            key={item.id}
            src={item.imgUrl}
            alt={item.dataArrivalImg}
            data-arrival-img={item.dataArrivalImg}
            quality={100}
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={item.blurHash}
          />
        ))}
      </div>
      {/*---------- auto carousel images start ------------*/}
    </section>
  );
};

export default NewArrival;
