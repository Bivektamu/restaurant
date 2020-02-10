import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from '../layout/Banner';
import Chefs from './Chefs';
import Testimonials from './Testimonials';
import Reservation from '../layout/Reservation';

import data from '../../data';

const About = () => {
  const about_data = data.filter(({ section }) => section === 'about');

  const { carousel, chefs, testimonials } = about_data[0];

  return (
    <Fragment>
      <Banner
        title='About Us'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        slides={carousel}
      />
      <Chefs chefs={chefs} />
      <Testimonials testimonials={testimonials} />
      <Reservation />
    </Fragment>
  );
};

// About.propTypes = {};

export default About;
