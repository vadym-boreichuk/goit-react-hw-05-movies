import axios from 'axios';

const API_KEY = '7212b11b8c935ff4fdea97b9eff4e2a4';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/day',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

const getMovies = async (page = 1) => {
  const response = axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  const res = await response;
  const obj = res.data;
  return obj.results;
};

const getMovieDetails = async id => {
  const resp = axios.get(`${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}`);

  return resp;
};

const getMovieReviews = async id => {
  const resp = axios.get(
    `${END_POINTS.movieDetails}/${id}/${END_POINTS.movieReviews}?api_key=${API_KEY}`
  );

  return resp;
};

const getMovieCast = async id => {
  const resp = axios.get(
    `${END_POINTS.movieDetails}/${id}/${END_POINTS.movieCredits}?api_key=${API_KEY}`
  );

  return resp;
};

export { getMovies, getMovieDetails, getMovieReviews, getMovieCast };
