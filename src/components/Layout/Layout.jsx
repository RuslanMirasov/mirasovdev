import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import css from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={css.Header}>
        <Container>Header</Container>
      </header>
      <main className="main">
        <Suspense fallback={<p>LOADING...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.Footer}>
        <Container>Footer</Container>
      </footer>
    </>
  );
};

export default Layout;
