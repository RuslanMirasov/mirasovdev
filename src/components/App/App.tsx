import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';

type LazyFC = React.LazyExoticComponent<React.FC>;

const Home: LazyFC = lazy(() => import('pages/Home'));
const PrivacyPolicy: LazyFC = lazy(() => import('pages/PrivacyPolicy'));
const NotFound: LazyFC = lazy(() => import('pages/NotFound'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
