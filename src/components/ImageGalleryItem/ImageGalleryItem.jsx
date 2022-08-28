import styles from './ImageGalleryItem.module.css';
const ImageGalleryItem = function ({ url }) {
  return (
    <div className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItemImage} src={url} alt="" />
    </div>
  );
};

export default ImageGalleryItem;
