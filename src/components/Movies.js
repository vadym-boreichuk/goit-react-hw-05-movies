import { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchBox from './SearchBox';

const Movies = () => {
  const BackToHomePage = () => {
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');
    console.log(location);
    return backLinkHref;
  };

  return (
    <>
      <Link to={BackToHomePage()}>Go back</Link>
      <Outlet />
      <SearchBox />
    </>
  );
};

export default Movies;
