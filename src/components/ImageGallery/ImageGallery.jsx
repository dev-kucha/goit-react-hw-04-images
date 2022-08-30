import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = function ({ images, onSelectImg }) {
  console.log(images);
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <li
          key={image.id}
          className={styles.ImageGalleryItem}
          onClick={() => onSelectImg(image.largeImageURL)}
        >
          <ImageGalleryItem url={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
