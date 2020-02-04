import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from '../layout/Banner';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Fragment>
      <Banner
        title='Contact Us'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <ContactForm />
    </Fragment>
  );
};

// Contact.propTypes = {};

export default Contact;
