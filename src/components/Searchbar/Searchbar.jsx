import PropTypes from 'prop-types';
import SearchForm from 'components/SearchForm/SearchForm';
import styles from './Searchbar.module.css';

const Searchbar = function (props) {
  return (
    <header className={styles.Searchbar}>
      <SearchForm handleSubmit={props.handleSubmit} />
    </header>
  );
};
Searchbar.Searchbar = {
  handleSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
