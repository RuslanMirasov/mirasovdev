import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components';

type LazyFC = React.LazyExoticComponent<React.FC>;

const Home: LazyFC = lazy(() => import('pages/Home'));
const NotFound: LazyFC = lazy(() => import('pages/NotFound'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
