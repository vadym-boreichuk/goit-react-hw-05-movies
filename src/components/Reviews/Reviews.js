import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/movies-api';
import { useParams } from 'react-router-dom';

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
      <ul>
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
        {reviews &&
          reviews.map(({ id, content, author }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export { Reviews as default } from './Reviews';
