import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = function ({ onNextPage }) {
  return (
    <button className={styles.LoadMore} type="button" onClick={onNextPage}>
      Load more
    </button>
  );
};

Button.Button = {
  onNextPage: PropTypes.func.isRequired,
};

export default Button;
