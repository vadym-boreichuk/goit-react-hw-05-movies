import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    function onSearch() {
      const API_KEY = '7212b11b8c935ff4fdea97b9eff4e2a4';
      const BASE_URL = 'https://api.themoviedb.org/3/movie/';
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/550?api_key=7212b11b8c935ff4fdea97b9eff4e2a4`

        //   const response = axios.get(
        //     `${BASE_URL}?api_key=7${API_KEY}/trending/get-trending`
      );
      console.log(response.then(res => res.status));
    }
    onSearch();
  }, []);

  return (
    <div>
      '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
    </div>
  );
};

export default Home;
