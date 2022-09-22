import React from 'react';
// import PropTypes from 'prop-types';
import {
  StyledMoviesGalleryItem,
  MoviesItem,
} from './MoviesGalleryItem.styled';
// import Modal from 'components/Modal';
// import InnerModal from 'components/InnerModal';
// import useToggleModal from 'hooks/toggleModal/';

export default function MoviesGalleryItem({ poster_path, title }) {
  // const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
  // useToggleModal(false);

  return (
    <>
      <StyledMoviesGalleryItem>
        <MoviesItem
          width="342px"
          alt={title}
          src={`https://image.tmdb.org/t/p/w342/${
            poster_path === null
              ? 'h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
              : poster_path
          }`}
          loading="lazy"
        />
        <span>{title}</span>
        {/* <br />
        <span>{vote_average}</span>
        <br />
        <span>{genre_ids}</span>
        <br />
        <span>{overview}</span>
        <br /> */}
      </StyledMoviesGalleryItem>

      {/* {isOpen && (
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
      )} */}
    </>
  );
}

// MoviesGalleryItem.propTypes = {
//   // id: PropTypes.string.isRequired,
//   // name: PropTypes.string.isRequired,
//   // number: PropTypes.string.isRequired,
//   onOpenModal: PropTypes.func,
// };
