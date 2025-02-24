import { Helmet, HelmetProvider } from 'react-helmet-async';

const ContactsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default ContactsPage;
