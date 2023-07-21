'use client'
import React from 'react'
import styles from "@/scss/pages-styles/product-details/ProductDetails.module.scss";
import Image from 'next/image';
import useProductDetails from '@/hooks/pages/ProductDetails/useProductDetails';
import { nanoid } from '@reduxjs/toolkit';


const optionImgs = [
  {
    id: nanoid(),
    url: 'https://i.ibb.co/J3KByKq/men-clothes-2.jpg'
  },
  {
    id: nanoid(),
    url: 'https://i.ibb.co/k2B5xRw/men-clothes-1.webp'
  },
  {
    id: nanoid(),
    url: 'https://i.ibb.co/sR0ZdQs/kids2.jpg'
  },
]


const ProductDetails = ({params}: {params: {id: string}}) => {
  console.log(params)


  const { handleOptionImg, pushDisplayImgRef, pushOptionImgRef} = useProductDetails();

   
  return (
    <main>
       <section className={styles.product_details_container}>
           <div className={styles.product_details_left_wrapper}>
            <div className={styles.display_img_wrapper}>

             {
              optionImgs.map((item, index) => (
                <Image 
                key={item.id}
                src={item.url} 
                data-display-img={index}
                ref={pushDisplayImgRef}
              //  ref={displayImgRef}
                alt='jacket'
                priority
                quality={100}
                fill
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
              />
              ))
             }

            {/* <Image
                    src="https://i.ibb.co/J3KByKq/men-clothes-2.jpg" 
                    data-display-img
                  //  ref={displayImgRef}
                    alt='jacket'
                    priority
                    quality={100}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                  /> */}
            </div>
            <div className={styles.display_img_options_wrapper}>


              {
                optionImgs.map((item, index) => (
                  <div key={item.id} className={styles.display_img_option}>
                  <Image
                      src={item.url} 
                      ref={pushOptionImgRef}
                      onPointerEnter={handleOptionImg}
                      alt='jacket'
                      priority
                      data-display-option-img={index}
                      quality={100}
                      fill
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                    />
                  </div>
                ))
              }


                {/* <div className={styles.display_img_option}>
                <Image
                    src="https://i.ibb.co/J3KByKq/men-clothes-2.jpg"
                    alt='jacket'
                    priority
                    data-display-option-img
                    quality={100}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                  />
                </div>
                <div className={styles.display_img_option}>
                <Image
                    src="https://i.ibb.co/J3KByKq/men-clothes-2.jpg"
                    data-display-option-img
                    alt='jacket'
                    priority
                    quality={100}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                  />
                </div>
                <div className={styles.display_img_option}>
                <Image
                    src="https://i.ibb.co/J3KByKq/men-clothes-2.jpg" 
                    data-display-option-img
                    alt='jacket'
                    priority
                    quality={100}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88BQAAssB12e3k1gAAAAASUVORK5CYII="
                  />
                </div> */}

            </div>
           </div>


           <div className={styles.product_details_right_wrapper}>
               
               <h2 className={styles.product_details_title}>Nike Jumpman MVP</h2>
               <h2 className={styles.product_details_category}>Mens Shoes</h2>
               <div className={styles.product_details_price}>$33</div>

            <div className={styles.sizes_container}>
              <h2>Sizes</h2>
              <div className={styles.sizes_grid}>
                <div>UK 6</div>
                <div>UK 6.5</div>
                <div>UK 7</div>
                <div>UK 7.5</div>
                <div>UK 8</div>
                <div>UK 8.5</div>
                <div>UK 9</div>
                <div>UK 9.5</div>
                <div>UK 10</div>
                <div>UK 10.5</div>
                <div>UK 11.5</div>
                <div>UK 12</div>
              </div>
            </div>

              <div className={styles.btns}>
                <button>Buy Now</button>
                <button>Add To Cart</button>
                <button>Add To Favorite</button>
              </div>

           </div>
       </section>
    </main>
  )
}

export default ProductDetails;