import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from '../layout/Banner';
import Chefs from './Chefs';
import Testimonials from './Testimonials';
import Reservation from '../layout/Reservation';

const About = () => {
  return (
    <Fragment>
      <Banner
        title='About Us'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        from='about'
      />
      <Chefs />
      <Testimonials />
      <Reservation />
    </Fragment>
  );
};

// About.propTypes = {};

export default About;
