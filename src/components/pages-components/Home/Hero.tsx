import React from "react";
import styles from "@/scss/pages-styles/Home/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_grid}>
        <div>
          <Image
            src="https://i.ibb.co/C9RCHN1/kids-shoes2.jpg"
            alt="kids shoes"
            // priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII=" 
            data-img-1
          />
        </div>
        <div>
        <Image
            src="https://i.ibb.co/sR0ZdQs/kids2.jpg"
            alt="kids shoes"
            // priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
          />
        </div>
        <div>
        <Image
            src="https://i.ibb.co/mG54Kwq/pexels-photo-2.jpg"
            alt="kids shoes"
            // priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
          />
        </div>
        <div>
        <Image
            src="https://i.ibb.co/r4Dk0kt/shoes3.jpg"
            alt="kids shoes"
            // priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
          />
        </div>
        <div>
        <Image
            src="https://i.ibb.co/vZMkBz4/shoes2.webp"
            alt="kids shoes"
            // priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
          />
        </div>
        <div>
        <Image
            src="https://i.ibb.co/NSw7N5b/pexels-photo-5.jpg"
            alt="kids shoes"
            // priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
          />
        </div>
        <div>
        <Image
            src="https://i.ibb.co/VYbhCX9/kids1.jpg"
            alt="kids shoes"
            // priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
          />
        </div>
        <div>
        <Image
            src="https://i.ibb.co/QM6KDh9/shoes4.jpg"
            alt="kids shoes"
            // priority
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8fwYAAtABzbrmHzgAAAAASUVORK5CYII="
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
