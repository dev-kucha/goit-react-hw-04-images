import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PixabayAPI from '../services/pixabay-api';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import styles from './App.module.css';

export class App extends Component {
  state = {
    searchQuery: '',
    images: null,
    showModal: false,
    // loading: false,
    error: null,
    status: 'idle',
  };

  // status
  // 'idle'
  // 'pending'
  // 'resolved'
  // 'rejected'

  // componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ status: 'pending', images: null });

      PixabayAPI.fetchPixabay(this.state.searchQuery)
        .then(response =>
          this.setState({ images: response.hits, status: 'resolved' })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(() => this.setState({ loading: false }));
    }
  }

  handleSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({ searchQuery: searchQuery.toLowerCase() });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, images, error, status } = this.state;

    return (
      <main className={styles.App}>
        <Searchbar handleSubmit={this.handleSubmit}>Searchbar</Searchbar>

        {status === 'resolved' && <ImageGallery images={images} />}

        {status === 'pending' && <Loader />}

        {status === 'rejected' && <p>{error.message}</p>}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            Modal Content
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}

        <ToastContainer />
      </main>
    );
  }
}
