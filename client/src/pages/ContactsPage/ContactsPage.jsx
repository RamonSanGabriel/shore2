import { Helmet, HelmetProvider } from 'react-helmet-async';

const ContactsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1>Contacts Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        corrupti dolore quis iusto commodi ratione voluptatibus dolor, delectus
        dolorum libero veritatis animi ipsum odit assumenda possimus eum dicta
        pariatur consequuntur neque debitis ea temporibus qui perferendis aut!
        Amet eaque ex nulla earum, quasi soluta consequuntur accusantium, odio
        recusandae reprehenderit eum!
      </p>
    </HelmetProvider>
  );
};

export default ContactsPage;
