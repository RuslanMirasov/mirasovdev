import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<p>LOADING...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
