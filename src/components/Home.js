// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import getMovies from 'services/movies-api';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getMovies().then(obj => {
//       console.log(obj);
//       setMovies(obj)
//         .catch(error => setError(error))
//         .finally(setLoading(false));
//     });
//   }, []);

//   return (
//     <ul>
//       {movies.map(a => (
//         <li key={a.id}>
//           <a href={a.poster_path}>{a.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Home;
