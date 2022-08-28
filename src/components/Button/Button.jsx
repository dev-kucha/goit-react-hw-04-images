import styles from './Button.module.css';

const Button = function () {
  return (
    <button className={styles.LoadMore} type="button">
      Load more
    </button>
  );
};

export default Button;
