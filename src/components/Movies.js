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
      <Link to={BackToHomePage()}>Back to products</Link>;
      <div>
        <input></input>
      </div>
    </>
  );
};

export default Movies;
