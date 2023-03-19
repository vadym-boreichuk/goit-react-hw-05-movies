// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/movies-api';

const MovieDetails = () => {
  const [detailFilms, setDetailFilms] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const movie = getMovieDetails(movieId);
    movie.then(result => {
      return setDetailFilms(result.data);
    });
  }, [movieId]);

  const {
    //   id,
    //   original_name,
    original_title,
    //   overview,
    //   genres,
    //   poster_path,
    //   vote_average,
    //   first_air_date,
    //   release_date,
  } = detailFilms;

  return (
    <>
      <h1>{original_title}</h1>
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

export default MovieDetails;
