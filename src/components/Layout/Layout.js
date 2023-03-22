import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
// import styled from 'styled-components';

const Layout = () => {
  // const StyledLink = styled(NavLink)`
  //   color: #212121;

  //   &.active {
  //     color: orangered;
  //   }
  // `;
  const location = useLocation();
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies" state={{ from: location }}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
