import styles from '@/scss/shared-component-styles/Navbar/Search.module.scss';

const Search = () => {
  return (
    <form className={styles.search_form} data-search-input>
    <input type="search" placeholder="Search products..." />
  </form>
  )
}

export default Search