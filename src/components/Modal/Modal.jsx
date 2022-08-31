import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log('Pressed Escape');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img
            src={this.props.imgUrl}
            onClick={this.props.onClose}
            alt={this.props.imgAlt}
            width="600"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.Modal = {
  onClose: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.array.isRequired,
};
