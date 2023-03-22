import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MovieList/MoviesList';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  const params = searchParams.get('query') ?? '';
  return (
    <>
      <div>
        <form>
          <input
            value={searchParams.get('query') ?? ''}
            type="text"
            name="query"
            onChange={e => updateQueryString(e.target.value)}
          />
          <button>search</button>
        </form>
      </div>
      <MoviesList searchParams={params} />
    </>
  );
};

export default SearchBox;
