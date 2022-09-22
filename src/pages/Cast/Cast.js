import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services';
import {
  StyledListGallery,
  StyledListItemGallery,
  StyledImageGallery,
} from './Cast.styled';
// import PropTypes from 'prop-types';

import { toastConfigs } from 'config/notifyConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(API.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      setStatus(API.PENDING);
      try {
        const data = await API.getSearchCastsMovieById(movieId);
        setCast(data.cast);
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
        <StyledListGallery>
          {cast.map(({ original_name, profile_path, character }, idx) => {
            return (
              <StyledListItemGallery key={idx}>
                <StyledImageGallery
                  width="342px"
                  alt={original_name}
                  src={`https://image.tmdb.org/t/p/w342/${
                    profile_path === null
                      ? 'h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
                      : profile_path
                  }`}
                  loading="lazy"
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </StyledListItemGallery>
            );
          })}
        </StyledListGallery>
      )}
    </>
  );
}

// Cast.propTypes = {};
