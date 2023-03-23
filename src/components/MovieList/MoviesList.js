import {
  Item,
  LinkToDetails,
  List,
  Wrapper,
} from 'components/TrandingMovies/TrendingMovies.styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieSearch } from 'services/movies-api';
import propTypes from 'prop-types';

const MoviesList = ({ searchParams }) => {
  const location = useLocation();
  const [query, setQuery] = useState([]);
  useEffect(() => {
    getMovieSearch(searchParams).then(response => {
      setQuery(response.data.results);
    });
  }, [searchParams]);

  return (
    <Wrapper>
      <List>
        {query.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <LinkToDetails
              to={`/movies/${id}`}
              state={{ from: location }}
              cover={poster_path}
            >
              {title}
            </LinkToDetails>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

MoviesList.propTypes = { searchParams: propTypes.string.isRequired };

export default MoviesList;
