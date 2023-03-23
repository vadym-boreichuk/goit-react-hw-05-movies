import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movies-api';
import { Character, Image, Item, List, Name } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const cast = getMovieCast(movieId);
    cast.then(res => setCast(res.data.cast));
  }, [movieId]);

  const setPosters = poster_path => {
    if (poster_path === null || poster_path === undefined) {
      return 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg';
    }

    return `https://www.themoviedb.org/t/p/w500${poster_path}`;
  };

  return (
    <List>
      {cast.map(
        ({ cast_id, profile_path, original_name, character, credit_id }) => (
          <Item key={cast_id}>
            <Image
              src={setPosters(profile_path)}
              alt={original_name}
              width="336"
              id={credit_id}
              loading="lazy"
            />
            <Name>{original_name}</Name>
            <Character>Character: {character}</Character>
          </Item>
        )
      )}
    </List>
  );
};

export { Cast as default } from './Cast';
