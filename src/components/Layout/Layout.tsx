import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Modal, Preloader } from 'components';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Modal />
    </>
  );
};

export default Layout;
