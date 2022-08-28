import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import styles from './App.module.css';

export class App extends Component {
  state = {
    showModal: true,
  };

  // componentDidMount() {}

  // componentDidUpdate() {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <main className={styles.App}>
        <Searchbar>Searchbar</Searchbar>
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
