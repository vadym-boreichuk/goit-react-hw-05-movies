import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import(
    '../pages/MovieDetails/MovieDetails' /* webpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() =>
  import('./Cast/Cast' /* webpackChunkName: "cast" */).then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "rewiews" */).then(
    module => ({
      ...module,
      default: module.Reviews,
    })
  )
);

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
