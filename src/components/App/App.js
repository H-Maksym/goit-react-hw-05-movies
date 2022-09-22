import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const Home = lazy(() => import('pages/Home' /*webpackChunkName:'Home'*/));
const Movies = lazy(() => import('pages/Movies' /*webpackChunkName:'Movies'*/));
const MovieDetails = lazy(() =>
  import('pages/MovieDetails' /*webpackChunkName:'MovieDetails'*/)
);
const Cast = lazy(() => import('pages/Cast' /*webpackChunkName:'Cast'*/));
const Reviews = lazy(() =>
  import('pages/Reviews' /*webpackChunkName:'Reviews'*/)
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<>Page not found</>} />
      </Route>
    </Routes>
  );
}
