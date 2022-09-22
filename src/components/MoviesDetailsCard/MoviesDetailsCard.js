// import {  } from 'react';
import PropTypes from 'prop-types';
import {
  StyledMoviesImg,
  StyledPrimaryTitle,
  StyledSecondaryTitle,
  StyledText,
  StyledList,
  StyledListItem,
} from './MoviesDetailsCard.styled';
import Box from 'components/Box';
import { Link, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';

export default function MoviesDetailsCard({ infoByMovie }) {
  const {
    original_title = '',
    vote_average = '',
    overview = '',
    genres = [],
    poster_path = '',
  } = infoByMovie || {};

  const location = useLocation();
  // `${location.state?.from.pathname}?query=${location.state?.from.search}`;
  let backLinkHref = '/';
  if (location.state?.search) {
    backLinkHref =
      location.state?.from.pathname + '?query=' + location.state?.search /* +
        '&page=' +
        location.state?.page  */ ?? '/movies';
  }

  return (
    <>
      <BackLink to={backLinkHref}>Back to list</BackLink>

      <Box
        display="flex"
        gridGap="20px"
        pb="20px"
        borderBottom="1px solid"
        borderColor="orange"
        // flexDirection=""
        // alignItems="center"
      >
        <Box minWidth={350}>
          <StyledMoviesImg
            width="500px"
            height="auto"
            alt={original_title}
            src={`https://image.tmdb.org/t/p/w342/${
              poster_path === null
                ? 'h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
                : poster_path
            }`}
            loading="lazy"
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gridGap="15px"
          maxWidth={800}
        >
          <StyledPrimaryTitle>{original_title}</StyledPrimaryTitle>
          <StyledText>User Score: {Math.floor(vote_average * 10)}%</StyledText>
          <StyledSecondaryTitle>Overview</StyledSecondaryTitle>
          <StyledText>User Score: {overview}</StyledText>
          <StyledSecondaryTitle>Genres</StyledSecondaryTitle>
          <StyledText>{genres.map(el => el.name).join(' ')}</StyledText>
        </Box>
      </Box>
      <StyledSecondaryTitle>Additional information</StyledSecondaryTitle>
      <StyledList>
        <StyledListItem>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </StyledListItem>
      </StyledList>
    </>
  );
}

MoviesDetailsCard.propTypes = {
  infoByMovie: PropTypes.object,
};
