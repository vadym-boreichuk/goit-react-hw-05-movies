import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const TrandingMovies = ({ movies, prevLocation }) => {
  // const { id } = useParams();
  useEffect(() => {}, []);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrandingMovies;
