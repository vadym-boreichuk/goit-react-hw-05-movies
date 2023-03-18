import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
// import HomePage from '../pages/HomePage';
import Home from './Home';
import Layout from './Layout';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
