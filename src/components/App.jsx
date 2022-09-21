import { useState, useEffect } from 'react';

import { toastConfigs } from 'config/notifyConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Circles } from 'react-loader-spinner';

//* Components
import APIMovie from 'services';

import Title from 'components/Title';
import Box from 'components/Box';
import Button from 'components/Button';

import SearchBar from 'components/SearchBar';
import SearchForm from 'components/SearchForm';
import ImageGallery from 'components/ImageGallery';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  LOADED: 'loaded',
  REJECTED: 'rejected',
};

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    async function getImages() {
      setStatus(Status.PENDING);
      console.log(await APIMovie.getSearchMovieById(991833));

      try {
        const data = await APIMovie.getSearchMovieResult(searchValue, page);

        if (page === 1) {
          if (data.total_results === 0) {
            toast.info(`Nothing was found for your query - "${searchValue}"`);
            setStatus(Status.RESOLVED);
            return;
          }
          setTotalHits(data.total_results);
          toast.success(
            `${data.total_results} pictures were found`,
            toastConfigs
          );
        }

        setImages(pS => [...pS, ...data.results]);
        setStatus(Status.RESOLVED);

        if (data.total_results.length < 12) {
          setStatus(Status.LOADED);
          toast.info('Everything is loaded');
        }
      } catch (error) {
        setStatus(Status.REJECTED);
        toast.error('oops :( Something wrong, try again');
      }
    }

    getImages();
  }, [page, searchValue]);

  useEffect(() => {
    if (page > 1) {
      const { scrollTop, clientHeight } = document.documentElement;
      window.scrollTo({
        top: scrollTop + clientHeight - 165,
        behavior: 'smooth',
      });
    }
  }, [page, images]);

  /** event handler filter*/
  function handleFormSubmit(e) {
    e.preventDefault();
    const searchValueInput = e.target.elements.query.value;

    //componentShouldUpdate()
    if (searchValueInput.trim() !== searchValue || page !== 1) {
      setSearchValue(searchValueInput);
      setPage(1);
      setImages([]);
      setTotalHits(0);
    }

    e.target.reset();
  }

  function loadMore() {
    setPage(pS => pS + 1);
  }

  /** render*/
  return (
    <>
      <Box py={0} as="section">
        <Box m="0 auto" px={15} py={0}>
          <ToastContainer />
          <Title>Image Gallery</Title>
          <SearchBar>
            <SearchForm onClick={handleFormSubmit} />
          </SearchBar>

          {status === Status.PENDING && (
            // <Box position="fixed" top="50vh" left="50vw">
            <Circles
              height="150"
              width="150"
              color=" #3f51b5"
              ariaLabel="circles-loading"
              wrapperStyle={{
                position: 'fixed',
                bottom: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                zIndex: '100',
              }}
              visible={true}
            />
            // </Box>
          )}

          {images.length > 0 && (
            <>
              <ImageGallery images={images} />
              {images.length <= totalHits && status !== Status.LOADED && (
                <Box py="20px" display="flex" justifyContent="center">
                  <Button onClick={loadMore}>Load more</Button>
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
