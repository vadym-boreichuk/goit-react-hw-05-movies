import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieSearch } from 'services/movies-api';

const MoviesList = ({ searchParams }) => {
  const location = useLocation();
  const [query, setQuery] = useState([]);
  useEffect(() => {
    getMovieSearch(searchParams).then(response => {
      setQuery(response.data.results);
    });
  }, [searchParams]);

  return (
    <>
      <ul>
        {query.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
