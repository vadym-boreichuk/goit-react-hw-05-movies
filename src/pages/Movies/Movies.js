import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';

const Movies = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      <Outlet />
      <SearchBox />
    </>
  );
};

export default Movies;
