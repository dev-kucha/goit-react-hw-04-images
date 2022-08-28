import SearchForm from 'components/SearchForm/SearchForm';
import styles from './Searchbar.module.css';

const Searchbar = function () {
  return (
    <header className={styles.Searchbar}>
      <SearchForm />
    </header>
  );
};
export default Searchbar;
