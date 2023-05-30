import { Component } from 'react';
import { Backdrop, LargeImage } from './Modal.styled';

class Modal extends Component {
  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    this.props.closeModal();
  };

  handleCloseByEsc = e => {
    if (e.code !== 'Escape') return;
    this.props.closeModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseByEsc);
  }

  render() {
    const { url, alt } = this.props.modalData;
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <LargeImage src={url} alt={alt} target="_blank" rel="noreferrer" />
      </Backdrop>
    );
  }
}

export default Modal;
