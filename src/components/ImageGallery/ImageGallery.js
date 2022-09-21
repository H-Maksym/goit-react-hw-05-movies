import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (
    <StyledImageGallery>
      {images.map(
        (
          {
            poster_path,
            backdrop_path,
            title,
            overview,
            vote_average,
            genre_ids,
          },
          idx
        ) => {
          return (
            <ImageGalleryItem
              key={idx}
              poster_path={poster_path}
              backdrop_path={backdrop_path}
              title={title}
              overview={overview}
              vote_average={vote_average}
              genre_ids={genre_ids}
            />
          );
        }
      )}
    </StyledImageGallery>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
