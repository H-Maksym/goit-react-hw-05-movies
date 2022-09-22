import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <Logo>
          <span style={{ width: '50px' }} role="img" aria-label="computer icon">
            🎬
          </span>
          Movie search
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
