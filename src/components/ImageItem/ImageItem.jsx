import { ImageBox, PrevImage } from './ImageItem.styled';
import PropTypes from 'prop-types';

const ImageItem = ({ hit, handleOpenModal }) => {
  const { id, largeImageURL, tags, webformatURL } = hit;
  return (
    <ImageBox
      key={id}
      onClick={() =>
        handleOpenModal({
          url: largeImageURL,
          alt: tags,
        })
      }
    >
      <PrevImage src={webformatURL} alt={tags} />
    </ImageBox>
  );
};

ImageItem.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
  hit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};

export default ImageItem;
