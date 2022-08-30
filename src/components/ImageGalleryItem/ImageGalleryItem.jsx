import styles from './ImageGalleryItem.module.css';
const ImageGalleryItem = function ({ url, alt }) {
  return <img className={styles.ImageGalleryItemImage} src={url} alt={alt} />;
};

export default ImageGalleryItem;
