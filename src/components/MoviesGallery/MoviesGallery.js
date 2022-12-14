import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesGalleryItem from 'components/MoviesGallery/MoviesGalleryItem';
import { StyledImageGallery } from './MoviesGallery.styled';

export default function MoviesGallery({ movies, searchValue /* , page  */ }) {
  const location = useLocation();
  return (
    <StyledImageGallery>
      {movies.map(
        (
          { id, poster_path, title, overview, vote_average, genre_ids },
          idx
        ) => {
          return (
            <Link
              key={idx}
              to={`/movies/${id}`}
              state={{ from: location, search: searchValue /* , page: page */ }}
            >
              <MoviesGalleryItem
                poster_path={poster_path}
                title={title}
                overview={overview}
                vote_average={vote_average}
                genre_ids={genre_ids}
              />
            </Link>
          );
        }
      )}
    </StyledImageGallery>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string,
};
