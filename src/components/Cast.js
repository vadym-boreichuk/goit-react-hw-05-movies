import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  useEffect(() => {}, []);
  return (
    <>
      <div>SubBreeds: {id}</div>
      <Link>here is cast</Link>
    </>
  );
};

export default Cast;
