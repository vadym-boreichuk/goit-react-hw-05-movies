import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/movies-api';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const [detailFilms, setDetailFilms] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const movie = getMovieDetails(movieId);
    movie.then(result => {
      return setDetailFilms(result.data);
    });
  }, [movieId]);

  const BackToHomePage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    return backLinkHref;
  };

  const setPosters = poster_path => {
    if (poster_path === null || poster_path === undefined) {
      return 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg';
    }

    return `https://www.themoviedb.org/t/p/w500${poster_path}`;
  };

  const genresList = detailFilms?.genres?.map(genre => genre.name).join(', ');
  console.log(detailFilms);

  const {
    id,
    original_name,
    original_title,
    overview,
    poster_path,
    vote_average,
    release_date,
    vote_count,
  } = detailFilms;

  return (
    <>
      <Link to={BackToHomePage()}>Go back</Link>
      <h1>
        {original_title}
        {release_date && <span> ({release_date.slice(0, 4)})</span>}
      </h1>

      {vote_count > 1 ? (
        <div>
          User score: {Math.round(vote_average * 10)}%&ensp;
          <span>
            ({vote_count} {vote_count === 1 ? 'vote' : 'votes'})
          </span>
        </div>
      ) : (
        'No votes yet'
      )}
      <img
        src={setPosters(poster_path)}
        alt="Poster film"
        title={original_name || original_title}
        width="336"
        id={id}
      />

      <h2>Overwiev</h2>
      <p>{overview}</p>
      <p>Additional information</p>
      <h3>Genres</h3>
      <ul>{<li>{genresList}</li>}</ul>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export { MovieDetails };
