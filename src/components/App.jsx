import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PixabayAPI from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import styles from './App.module.css';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [selectImageUrl, setSelectImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' || 'pending' || 'resolved' || 'rejected'
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    if (searchQuery === '') return;

    setStatus('pending');

    PixabayAPI.fetchPixabay(searchQuery, page)
      .then(response => {
        if (response.hits.length > 0) {
          return response;
        }
        return Promise.reject(
          new Error(`За запитом ${searchQuery} нічого не знайдено`)
        );
      })
      .then(response => {
        setImages(images => [...images, ...response.hits]);
        setStatus('resolved');
        setPages(response.totalHits / PixabayAPI.PER_PAGE);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [searchQuery, page]);

  const handleSubmit = searchQuery => {
    // console.log(searchQuery);
    setSearchQuery(searchQuery.toLowerCase());
    setImages([]);
    setPage(1);
  };

  const handleSelectImg = (url = '') => {
    setSelectImageUrl(url);
  };

  const handleNextPage = () => {
    setPage(page => page + 1);
  };

  return (
    <main className={styles.App}>
      <Searchbar handleSubmit={handleSubmit}>Searchbar</Searchbar>

      <ImageGallery images={images} onSelectImg={handleSelectImg} />

      {status === 'rejected' && <p>{error.message}</p>}

      {selectImageUrl.length > 0 && (
        <Modal
          onClose={handleSelectImg}
          imgUrl={selectImageUrl}
          imgAlt={searchQuery}
        />
      )}
      {page < pages && <Button onNextPage={handleNextPage} />}
      {status === 'pending' && <Loader />}
      <ToastContainer />
    </main>
  );
};
