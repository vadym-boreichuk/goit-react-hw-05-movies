import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import styled from 'styled-components';

const Layout = () => {
  // const StyledLink = styled(NavLink)`
  //   color: #212121;

  //   &.active {
  //     color: orangered;
  //   }
  // `;

  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
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
