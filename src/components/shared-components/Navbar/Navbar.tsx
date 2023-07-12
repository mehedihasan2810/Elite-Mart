import React from "react";
import styles from "@/scss/shared-component-styles/Navbar/Navbar.module.scss";
import UpperNavbar from "./UpperNavbar";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <header className={`${styles.navbar_container} nav-container`}>
      <div className={styles.navbar_center}>
        <UpperNavbar />
        <BottomNavbar />
      </div>
    </header>
  );
};

export default Navbar;
