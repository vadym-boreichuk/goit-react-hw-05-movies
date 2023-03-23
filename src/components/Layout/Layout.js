import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
// import styled from 'styled-components';

const Layout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/movies" state={{ from: location }}>
            Movies
          </Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
