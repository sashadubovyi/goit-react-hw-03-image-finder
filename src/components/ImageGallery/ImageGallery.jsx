import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import { getSearchImagesApi } from '../../services/imageAPI';
import { Error, ImageList, MoreBtn } from './ImageGallery.styled';
import ImageItem from 'components/ImageItem/ImageItem';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    image: [],
    page: 1,
    searchCopy: null,
    totalResults: 0,
    isLoading: false,
    error: null,
    isModalOpen: false,
    modalData: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.search !== state.searchCopy) {
      return { page: 1, searchCopy: props.search };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.search !== this.props.search ||
      prevState.page !== this.state.page
    ) {
      this.getSearchImg();
    }
  }

  getSearchImg = () => {
    this.setState({ isLoading: true, error: null });
    getSearchImagesApi(this.props.search, this.state.page)
      .then(imageInfo =>
        this.setState(prevState => ({
          image:
            this.state.page === 1
              ? imageInfo.hits
              : [...prevState.image, ...imageInfo.hits],
          totalResults: imageInfo.totalHits,
        }))
      )
      .catch(err => this.setState({ error: err.message }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  setModalData = modalData => {
    this.setState({ modalData });
  };

  handleOpenModal = data => {
    this.setModalData(data);
  };

  closeModal = () => {
    this.setState({ modalData: null });
  };

  render() {
    const { image, isLoading, error, totalResults, modalData } = this.state;
    return (
      <>
        {error ? (
          <Error>{error}</Error>
        ) : (
          <ImageList>
            {image.map(hit => (
              <ImageItem
                key={hit.id}
                hit={hit}
                handleOpenModal={this.handleOpenModal}
              />
            ))}
          </ImageList>
        )}
        {isLoading && <Loader />}
        {totalResults > image.length && (
          <MoreBtn type="button" onClick={this.changePage}>
            Load more images
          </MoreBtn>
        )}
        {modalData && (
          <Modal closeModal={this.closeModal} modalData={modalData} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  hit: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default ImageGallery;
