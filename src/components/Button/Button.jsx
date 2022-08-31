import styles from './Button.module.css';

const Button = function ({ onNextPage }) {
  return (
    <button className={styles.LoadMore} type="button" onClick={onNextPage}>
      Load more
    </button>
  );
};

export default Button;
