import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services';
import {
  StyledReviewsList,
  StyledText,
  StyledSecondaryTitle,
  StyledReviewsListItem,
} from './Reviews.styled';
// import PropTypes from 'prop-types';

import { toastConfigs } from 'config/notifyConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(API.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      setStatus(API.PENDING);
      try {
        const data = await API.getSearchReviewsMovieById(movieId);
        setReviews(data.results);
        setStatus(API.RESOLVED);
        // toast.info('Everything is loaded',toastConfigs);
      } catch (error) {
        setStatus(API.REJECTED);
        toast.error('oops :( Something wrong, try again', toastConfigs);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <>
      <ToastContainer />
      {status === API.PENDING && <Loader />}
      {status === API.RESOLVED && (
        <StyledReviewsList>
          {reviews > 0 ? (
            reviews.map(({ author, content }, idx) => {
              return (
                <StyledReviewsListItem key={idx}>
                  <StyledSecondaryTitle>Author: {author}</StyledSecondaryTitle>
                  <StyledText>{content}</StyledText>
                </StyledReviewsListItem>
              );
            })
          ) : (
            <StyledSecondaryTitle>There are no reviews</StyledSecondaryTitle>
          )}
        </StyledReviewsList>
      )}
    </>
  );
}

// Reviews.propTypes = {};
