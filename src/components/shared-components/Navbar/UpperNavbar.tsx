import React from "react";
import styles from "@/scss/shared-component-styles/Navbar/UpperNavbar.module.scss";
import Image from "next/image";
import Link from "next/link";
const UpperNavbar = () => {
  return (
    <div className={styles.upperNavbar_container}>
      <div>

        <div>
          <Image data-testid='flag' src="us.svg" width={25} height={25} alt="us flag" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <div>
          <span>USD</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <ul role="list">
        <li>
        <Link href="#">Sign In</Link>
        </li>
       <li>
       <Link href="#">Sign Up</Link>
       </li>
       <li>
       <Link href="#">Our Stores</Link>
       </li>
        <li>
        <Link href="#">Help</Link>
        </li>
       
      </ul>
    </div>
  );
};

export default UpperNavbar;
