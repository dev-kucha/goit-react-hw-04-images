import styles from './SearchForm.module.css';

const SearchForm = function () {
  return (
    <form className={styles.SearchForm}>
      <button type="button" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        // autocomplete="off"
        // autofocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default SearchForm;
