import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import { Wrapp } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Wrapp to={backLinkHref}>Go back</Wrapp>
      <Outlet />
      <SearchBox />
    </>
  );
};

export default Movies;
