import TrandingMovies from 'pages/TrendingMovies';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);

      getMovies()
        .then(obj => {
          setMovies(obj);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      {loading && '...loading'}
      {error && <div>{error}</div>}
      {movies && <TrandingMovies movies={movies} />}
    </>
  );
};

export default Home;
