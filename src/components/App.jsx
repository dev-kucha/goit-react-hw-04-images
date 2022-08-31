import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PixabayAPI from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import styles from './App.module.css';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    selectImageUrl: '',
    error: null,
    status: 'idle', // 'idle' || 'pending' || 'resolved' || 'rejected'
    page: 1,
    pages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      PixabayAPI.fetchPixabay(this.state.searchQuery, this.state.page)
        .then(response => {
          if (response.hits.length > 0) {
            return response;
          }
          return Promise.reject(
            new Error(`За запитом ${this.state.searchQuery} нічого не знайдено`)
          );
        })
        .then(response => {
          this.setState(prevState => ({
            images: [...prevState.images, ...response.hits],
            status: 'resolved',
            pages: response.totalHits / PixabayAPI.PER_PAGE,
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(() => this.setState({ loading: false }));
    }
  }

  handleSubmit = searchQuery => {
    // console.log(searchQuery);
    this.setState({
      searchQuery: searchQuery.toLowerCase(),
      images: [],
      page: 1,
    });
  };

  handleNextPage = () => {
    // console.log(this.state.page);
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  addImages = images => {
    this.setState(prevState => ({ images: [...prevState.images, ...images] }));
  };

  handleSelectImg = (url = '') => {
    this.setState(() => ({
      selectImageUrl: url,
    }));
  };

  render() {
    const { images, error, status, selectImageUrl, searchQuery } = this.state;

    return (
      <main className={styles.App}>
        <Searchbar handleSubmit={this.handleSubmit}>Searchbar</Searchbar>

        <ImageGallery images={images} onSelectImg={this.handleSelectImg} />

        {status === 'rejected' && <p>{error.message}</p>}

        {selectImageUrl.length > 0 && (
          <Modal
            onClose={this.handleSelectImg}
            imgUrl={selectImageUrl}
            imgAlt={searchQuery}
          />
        )}
        {this.state.page < this.state.pages && (
          <Button onNextPage={this.handleNextPage} />
        )}
        {status === 'pending' && <Loader />}
        <ToastContainer />
      </main>
    );
  }
}
