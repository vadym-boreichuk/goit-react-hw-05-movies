import { Link } from 'react-router-dom';

const MoviesList = ({ query }) => {
  return (
    <>
      <ul>
        {query.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
