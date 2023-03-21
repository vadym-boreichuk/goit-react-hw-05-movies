import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ query }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {query &&
          query.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesList;
