import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchBox from './SearchBox';

const Movies = () => {
  const BackToHomePage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
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
