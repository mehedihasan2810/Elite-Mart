import React from 'react'
import styles from '@/scss/shared-component-styles/Navbar/Search.module.scss';

const Search = () => {
  return (
    <form className={styles.search_form} data-search-input>
    <input type="search" placeholder="Search" />
  </form>
  )
}

export default Search