import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import styles from './App.module.css';

export class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };

  // componentDidMount() {}

  // componentDidUpdate() {}

  handleSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({ searchQuery: searchQuery });
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
        <ImageGallery />
        <Loader />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            Modal Content
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </main>
    );
  }
}
