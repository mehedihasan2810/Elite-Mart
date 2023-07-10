import React from 'react'
import styles from '@/scss/shared-component-styles/Navbar/Navbar.module.scss';
import UpperNavbar from './UpperNavbar';
import BottomNavbar from './BottomNavbar';

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_center}>
      <UpperNavbar/>
      <BottomNavbar/>
      </div>
    </div>
  )
}

export default Navbar