import { Item, LinkToDetails, List, Wrapper } from './TrendingMovies.styled';
import propTypes from 'prop-types';

const TrandingMovies = ({ movies }) => {
  return (
    <Wrapper>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <LinkToDetails to={`/movies/${id}`} cover={poster_path}>
              {title}
            </LinkToDetails>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

TrandingMovies.propTypes = { movies: propTypes.array.isRequired };

export default TrandingMovies;
