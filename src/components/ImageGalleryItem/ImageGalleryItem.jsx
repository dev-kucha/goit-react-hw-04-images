import styles from './ImageGalleryItem.module.css';
const ImageGalleryItem = function () {
  return (
    <li className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItemImage} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
