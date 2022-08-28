import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = function ({ images }) {
  console.log(images);
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <li key={image.id}>
          <ImageGalleryItem url={image.webformatURL} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
