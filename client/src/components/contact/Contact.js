import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from './Banner';
import ContactForm from './ContactForm';

import data from '../../data';

const Contact = () => {
  const homeImg = data.filter(({ section }) => section === 'home');

  const { icons, carousel } = homeImg[0];

  return (
    <Fragment>
      <Banner icons={icons} slides={carousel} />
      <ContactForm />
    </Fragment>
  );
};

// Contact.propTypes = {};

export default Contact;
