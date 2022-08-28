import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import styles from './App.module.css';

const API_KEY = '28388902-8d9f79c473b0c7ec620d22f12';

export class App extends Component {
  state = {
    searchQuery: '',
    images: null,
    showModal: false,
  };

  // componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(response => this.setState({ images: response.hits }));
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
    const { showModal } = this.state;

    return (
      <main className={styles.App}>
        <Searchbar handleSubmit={this.handleSubmit}>Searchbar</Searchbar>
        {this.state.images && <ImageGallery images={this.state.images} />}
        <Loader />
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
