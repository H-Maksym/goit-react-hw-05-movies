import React from 'react';
// import PropTypes from 'prop-types';
import { StyledMoviesImg } from './MoviesDetailsCard.styled';
import Box from 'components/Box';

export default function MoviesDetailsCard({ infoByMovie }) {
  const {
    original_title = '',
    // vote_average = '',
    // overview = '',
    // genres = [],
    poster_path = '',
  } = infoByMovie || {};
  return (
    <>
      <Box>
        <StyledMoviesImg
          width="342px"
          alt={original_title}
          src={`https://image.tmdb.org/t/p/w342/${
            poster_path === null
              ? 'h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
              : poster_path
          }`}
          loading="lazy"
        />
      </Box>
    </>
  );
}

MoviesDetailsCard.propTypes = {};
