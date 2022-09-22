import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import API from 'services';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [status, setStatus] = useState(API.IDLE);

  useEffect(() => {
    async function getPopularMovies() {
      setStatus(API.PENDING);
      try {
        const data = await API.getMovieTrend();
        setPopularMovies(pS => [...pS, ...data.results]);
        setStatus(API.RESOLVED);
        // toast.info('Everything is loaded');
      } catch (error) {
        setStatus(API.REJECTED);
        // toast.error('oops :( Something wrong, try again');
      }
    }
    getPopularMovies();
  }, []);

  return (
    <>
      {status === API.PENDING && <Loader />}
      {popularMovies.length > 0 && <MoviesGallery movies={popularMovies} />}
    </>
  );
}

// Home.propTypes = {};
