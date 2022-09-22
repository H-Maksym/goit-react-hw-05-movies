import { useEffect, useState } from 'react';
import { useParams, /* useLocation, */ Outlet } from 'react-router-dom';
import MovieDetailsCard from 'components/MoviesDetailsCard';
import API from 'services';

// import PropTypes from 'prop-types';

import { toastConfigs } from 'config/notifyConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [infoByMovie, setInfoByMovie] = useState({});
  const [status, setStatus] = useState(API.IDLE);

  useEffect(() => {
    async function getMovie() {
      setStatus(API.PENDING);
      try {
        const data = await API.getSearchMovieById(movieId);
        setInfoByMovie(data);
        setStatus(API.RESOLVED);
        // toast.info('Everything is loaded',toastConfigs);
      } catch (error) {
        setStatus(API.REJECTED);
        toast.error('oops :( Something wrong, try again', toastConfigs);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <ToastContainer />
      {status === API.RESOLVED && (
        <main>
          <MovieDetailsCard infoByMovie={infoByMovie} />
          <Outlet />
        </main>
      )}
    </>
  );
}

// MovieDetails.propTypes = {};
