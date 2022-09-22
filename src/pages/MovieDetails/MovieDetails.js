import { useEffect, useState, useRef } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import BackLink from 'components/BackLink';
import MovieDetailsCard from 'components/MoviesDetailsCard';
import API from 'services';

// import PropTypes from 'prop-types';

export default function MovieDetails(props) {
  const { movieId } = useParams();
  const location = useLocation();
  const [infoByMovie, setInfoByMovie] = useState({});
  const [status, setStatus] = useState(API.IDLE);

  useEffect(() => {
    async function getMovie() {
      setStatus(API.PENDING);
      try {
        const data = await API.getSearchMovieById(movieId);
        setInfoByMovie(data);
        setStatus(API.RESOLVED);
        // toast.info('Everything is loaded');
      } catch (error) {
        setStatus(API.REJECTED);
        // toast.error('oops :( Something wrong, try again');
      }
    }
    getMovie();
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <main>
        <MovieDetailsCard infoByMovie={infoByMovie} />
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <Outlet />
      </main>
    </>
  );
}

// MovieDetails.propTypes = {};
