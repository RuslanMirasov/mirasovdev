import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../components';

const Home = lazy(() => import('../../pages/Home'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const App = () => {
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
