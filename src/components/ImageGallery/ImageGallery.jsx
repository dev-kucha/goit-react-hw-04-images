import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = function () {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem>ImageGallaryItem</ImageGalleryItem>
      <ImageGalleryItem>ImageGallaryItem</ImageGalleryItem>
      <ImageGalleryItem>ImageGallaryItem</ImageGalleryItem>
    </ul>
  );
};
export default ImageGallery;
