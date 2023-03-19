import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  useEffect(() => {}, []);

  const BackToHomePage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    return backLinkHref;
  };

  return (
    <>
      <Link to={BackToHomePage()}>Go back</Link>
      <div>
        <input type="input"></input>
      </div>
    </>
  );
};

export default Movies;
