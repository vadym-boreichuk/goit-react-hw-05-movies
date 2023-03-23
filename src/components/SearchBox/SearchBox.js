import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MovieList/MoviesList';
import { Icon, Wrapper } from './SearchBox.styled';
import { DebounceInput } from 'react-debounce-input';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  const params = searchParams.get('query') ?? '';
  return (
    <>
      <Wrapper>
        <DebounceInput
          value={searchParams.get('query') ?? ''}
          type="text"
          debounceTimeout={500}
          name="query"
          onChange={e => updateQueryString(e.target.value)}
          placeholder="type here"
        />
        <Icon />
      </Wrapper>
      <MoviesList searchParams={params} />
    </>
  );
};

export default SearchBox;
