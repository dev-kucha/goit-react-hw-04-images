import SearchForm from 'components/SearchForm/SearchForm';
import styles from './Searchbar.module.css';

const Searchbar = function (props) {
  return (
    <header className={styles.Searchbar}>
      <SearchForm handleSubmit={props.handleSubmit} />
    </header>
  );
};
export default Searchbar;
