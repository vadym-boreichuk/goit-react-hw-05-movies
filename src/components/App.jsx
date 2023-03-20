import { Route, Routes } from 'react-router-dom';
// import Cast from './Cast';
// import HomePage from '../pages/HomePage';
import Layout from './Layout';
// import { MovieDetails } from '../pages/MovieDetails';
// import Movies from './Movies';
// import Reviews from './Reviews';
import { lazy, Suspense } from 'react';

// const Foo = React.lazy( async () => (await import('./foo/foo').MyComponent )

const HomePage = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails' /* webpackChunkName: "movie-details-page" */)
);
const Cast = lazy(() =>
  import('./Cast' /* webpackChunkName: "cast" */).then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "rewiews" */).then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId/" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};