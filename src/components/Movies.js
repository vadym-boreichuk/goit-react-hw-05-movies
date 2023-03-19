import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getMovieSearch } from 'services/movies-api';

const Movies = () => {
  const [query, setQuery] = useState([]);

  useEffect(() => {}, [query]);

  const onHandleSubmit = event => {
    event.preventDefault();
    const queryInput = event.currentTarget.elements.query.value;
    console.log(event.currentTarget.elements.query.value);
    getMovieSearch(queryInput).then(response => {
      setQuery(response.data.results);
      console.log('jest', query);
    });

    event.currentTarget.reset();
  };

  const BackToHomePage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    return backLinkHref;
  };

  // console.log(query);
  return (
    <>
      <Link to={BackToHomePage()}>Go back</Link>

      <form onSubmit={onHandleSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {query.map(({ id, original_title, title, prevLocation }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
