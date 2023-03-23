import { useEffect } from 'react';
import { Item, LinkToDetails, List, Wrapper } from './TrendingMovies.styled';

const TrandingMovies = ({ movies, prevLocation }) => {
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <LinkToDetails
              to={`/movies/${id}`}
              state={{ from: prevLocation }}
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

export default TrandingMovies;
