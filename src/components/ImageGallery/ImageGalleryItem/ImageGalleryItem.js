import React from 'react';
import PropTypes from 'prop-types';
import { StyledImageGalleryItem, ImageItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';
import InnerModal from 'components/InnerModal';
import useToggleModal from 'hooks/toggleModal/';

export default function ImageGalleryItem({
  poster_path,
  backdrop_path,
  title,
  vote_average,
  overview,
  genre_ids,
}) {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal(false);
  return (
    <>
      <StyledImageGalleryItem onClick={openModal}>
        <ImageItem
          alt={title}
          src={`https://image.tmdb.org/t/p/w780/${
            poster_path === null
              ? 'h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
              : poster_path
          }`}
          loading="lazy"
        />
        <span>{title}</span>
        <br />
        <span>{vote_average}</span>
        <br />
        <span>{genre_ids}</span>
        <br />
        <span>{overview}</span>
        <br />
      </StyledImageGalleryItem>

      {isOpen && (
        <Modal
          handleBackdropClick={handleBackdropClick}
          handleKeyDown={handleKeyDown}
          closeModal={closeModal}
        >
          <InnerModal
            largeImageURL={`https://image.tmdb.org/t/p/w780/${
              backdrop_path === null
                ? '/h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
                : backdrop_path
            }`}
          />
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func,
};
