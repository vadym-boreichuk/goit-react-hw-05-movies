import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/movies-api';
import MoviesList from 'pages/MoviesList';
import { useState } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleSubmit = event => {
    event.preventDefault();
    const queryInput = event.target.elements.query.value;
    getMovieSearch(queryInput).then(response => {
      setQuery(response.data.results);
    });
  };

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <div>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            name="query"
            onChange={e => updateQueryString(e.target.value)}
          />
          <button>search</button>
        </form>
      </div>
      <MoviesList query={query} />
    </>
  );
};

export default SearchBox;