import { ImageBox, PrevImage } from './ImageItem.styled';

const ImageItem = ({ hit, handleOpenModal }) => {
  return (
    <ImageBox
      key={hit.id}
      onClick={() =>
        handleOpenModal({
          url: hit.largeImageURL,
          alt: hit.tags,
        })
      }
    >
      <PrevImage src={hit.webformatURL} alt={hit.tags} />
    </ImageBox>
  );
};

export default ImageItem;
