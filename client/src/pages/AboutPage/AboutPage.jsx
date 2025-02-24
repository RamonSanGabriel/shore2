import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';

const AboutPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default AboutPage;
