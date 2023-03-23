import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/movies-api';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Info,
  MovieCard,
  Poster,
  Score,
  Title,
  Wrapper,
  Header,
  TextData,
  List,
  ExtraButtonsList,
  Wrapp,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [detailFilms, setDetailFilms] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const movie = getMovieDetails(movieId);
    movie.then(result => {
      return setDetailFilms(result.data);
    });
  }, [movieId]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const setPosters = poster_path => {
    if (poster_path === null || poster_path === undefined) {
      return 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg';
    }

    return `https://www.themoviedb.org/t/p/w500${poster_path}`;
  };

  const genresList = detailFilms?.genres?.map(genre => genre.name).join(', ');

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
    <Wrapper backdrop={poster_path}>
      <Wrapp to={backLinkLocationRef.current}>Go back</Wrapp>
      <MovieCard>
        <Poster
          src={setPosters(poster_path)}
          alt="Poster film"
          title={original_name || original_title}
          width="336"
          id={id}
        />
        <Info>
          <Title>
            {original_title}
            {release_date && <span> ({release_date.slice(0, 4)})</span>}
          </Title>
          <Score>
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
          </Score>
          <Header>Overwiev</Header>
          <TextData>{overview}</TextData>
          <TextData>Additional information</TextData>
          <Header>Genres</Header>
          <List>{<li>{genresList}</li>}</List>
        </Info>
      </MovieCard>
      <ExtraButtonsList>
        <li>
          <Wrapp to="cast">cast</Wrapp>
        </li>
        <li>
          <Wrapp to="reviews">reviews</Wrapp>
        </li>
      </ExtraButtonsList>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default MovieDetails;
