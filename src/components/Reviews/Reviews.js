import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/movies-api';
import { useParams } from 'react-router-dom';
import { Author, Content, Item, List } from './Rewiews.styled';

export const Reviews = () => {
  const [reviews, setRewiews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(res => {
      setRewiews(res.data.results);
    });
  }, [movieId]);

  return (
    <>
      <List>
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
        {reviews &&
          reviews.map(({ id, content, author }) => (
            <Item key={id}>
              <Author>Author: {author}</Author>
              <Content>{content}</Content>
            </Item>
          ))}
      </List>
    </>
  );
};

export { Reviews as default } from './Reviews';
