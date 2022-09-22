import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import API from 'services';

// import PropTypes from 'prop-types';

// import { toastConfigs } from 'config/notifyConfig';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(API.IDLE);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    async function getCast() {
      setStatus(API.PENDING);
      try {
        const data = await API.getSearchCastsMovieById(movieId);
        setCast(data);
        setStatus(API.RESOLVED);
        // toast.info('Everything is loaded');
      } catch (error) {
        setStatus(API.REJECTED);
        // toast.error('oops :( Something wrong, try again');
      }
    }
    getCast();
  }, [movieId]);

  console.log(status, cast, location);
  return (
    <>
      <div>NewPage</div>
      <p>Ghjklk</p>
    </>
  );
}

// Cast.propTypes = {};
