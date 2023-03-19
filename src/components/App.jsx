import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
// import HomePage from '../pages/HomePage';
import HomePage from '../pages/HomePage';
import Layout from './Layout';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Reviews from './Reviews';

export const App = () => {
  return (
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
  );
};
