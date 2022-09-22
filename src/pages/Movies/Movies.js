import { useEffect, useState } from 'react';

// import PropTypes from 'prop-types';

import API from 'services';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';
import SearchBar from 'components/SearchBar';
import SearchForm from 'components/SearchForm';
import Box from 'components/Box';
import Button from 'components/Button';

import { toastConfigs } from 'config/notifyConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

export default function Movies() {
  const location = useLocation();
  const defaultSearchValue = location.search?.replace(/\?query=/, '');
  // const defaultPageValue = location.search?.replace(/\?query=[a-z]+&page=/, '');

  const [searchMovies, setSearchMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(defaultSearchValue || '');
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [status, setStatus] = useState(API.IDLE);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    async function getSearchMovies() {
      setStatus(API.PENDING);

      try {
        const data = await API.getSearchMovieResult(searchValue, page);

        if (page === 1) {
          if (data.total_results === 0) {
            toast.info(
              `Nothing was found for your query - "${searchValue}"`,
              toastConfigs
            );
            setStatus(API.RESOLVED);
            return;
          }
          setTotalMovies(data.total_results);
          toast.success(`${data.total_results} films were found`, toastConfigs);
        }

        !totalMovies && setTotalMovies(data.total_results);

        setSearchMovies(pS => [...pS, ...data.results]);
        setStatus(API.RESOLVED);

        if (data.results.length < 20) {
          setStatus(API.LOADED);
          toast.info('Everything is loaded', toastConfigs);
        }
      } catch (error) {
        setStatus(API.REJECTED);
        toast.error('oops :( Something wrong, try again', toastConfigs);
      }
    }
    getSearchMovies();
    // location.search = '';
    // eslint-disable-next-line
  }, [searchValue, page]);

  function handleFormSubmit(e) {
    e.preventDefault();
    const searchValueInput = e.target.elements.query.value;

    //componentShouldUpdate()
    if (searchValueInput.trim() !== searchValue || page !== 1) {
      setSearchValue(searchValueInput);
      setPage(1);
      setSearchMovies([]);
      setTotalMovies(0);
    }

    e.target.reset();
  }

  function loadMore() {
    setPage(pS => pS + 1);
  }

  return (
    <>
      <ToastContainer />
      <SearchBar>
        <SearchForm onClick={handleFormSubmit} />
      </SearchBar>
      {status === API.PENDING && <Loader />}
      {searchMovies.length > 0 && (
        <>
          <MoviesGallery
            movies={searchMovies}
            searchValue={searchValue}
            // page={page}
          />
          {searchMovies.length <= totalMovies && status !== API.LOADED && (
            <Box py="20px" display="flex" justifyContent="center">
              <Button onClick={loadMore}>Load more</Button>
            </Box>
          )}
        </>
      )}
    </>
  );
}

// Movies.propTypes = {};
