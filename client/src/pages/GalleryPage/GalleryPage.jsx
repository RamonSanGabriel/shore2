import { Helmet, HelmetProvider } from 'react-helmet-async';

const GalleryPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default GalleryPage;
