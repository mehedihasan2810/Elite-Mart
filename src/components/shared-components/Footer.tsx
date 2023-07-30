import styles from "@/scss/shared-component-styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul role="list" className={styles.footer_main}>
        {/* col 1 */}
        <li>
          <h5>Products</h5>

          <ul>
            <li>
              <Link href="/products">Clothing</Link>
            </li>
            <li>
              <Link href="/products">Shoes</Link>
            </li>
            <li>
              <Link href="/products">New Arrival</Link>
            </li>
            <li>
              <Link href="/products">Trending</Link>
            </li>
            <li>
              <Link href="/products">Best Sellers</Link>
            </li>
            <li>
              <Link href="/products">Best Rated</Link>
            </li>
          </ul>
        </li>

        {/* col 2 */}
        <li>
          <h5>Get Help</h5>

          <ul>
            <li>
              <Link href="/products">Delivery</Link>
            </li>
            <li>
              <Link href="/products">Returns</Link>
            </li>
            <li>
              <Link href="/products">Payment Options</Link>
            </li>
            <li>
              <Link href="/products">Order Status</Link>
            </li>
            <li>
              <Link href="/products">Contact Us</Link>
            </li>
          </ul>
        </li>

        {/* col 3 */}
        <li>
          <h5>About EliteMart</h5>

          <ul>
            <li>
              <Link href="/products">News</Link>
            </li>
            <li>
              <Link href="/products">Careers</Link>
            </li>
            <li>
              <Link href="/products">Investors</Link>
            </li>
            <li>
              <Link href="/products">Student Discount</Link>
            </li>
            <li>
              <Link href="/products">Sustainability</Link>
            </li>
          </ul>
        </li>

        {/* col 4 */}
        <li>
          <h5>Follow Us</h5>

          <ul className={styles.footer_socials}>
            <li>
              <Link href="#">
                <svg
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                  width="512"
                  height="512"
                >
                  <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                  width="512"
                  height="512"
                >
                  <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                  <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                  <circle cx="351.5" cy="160.5" r="21.5"></circle>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                  width="512"
                  height="512"
                >
                  <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* footer bottom */}
      <ul role="list">
        <li>
          <p>@2023 EliteMart. All Rights Reserved</p>
        </li>

        <li>
          <ul role="list">
            <li>
              <Link href="#">Guides</Link>
            </li>
            <li>
              <Link href="#">Terms of Sales</Link>
            </li>
            <li>
              <Link href="#">Terms of Use</Link>
            </li>
            <li>
              <Link href="#">EliteMart Privacy Policy</Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
