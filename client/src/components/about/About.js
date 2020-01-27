import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from './Banner';
import Chefs from './Chefs';
import Testimonials from './Testimonials';
import Reservation from '../layout/Reservation';

import data from '../../data';

const About = () => {
  const home_data = data.filter(({ section }) => section === 'home');

  const about_data = data.filter(({ section }) => section === 'about');

  const { carousel, chefs, testimonials } = about_data[0];
  const { icons, reservation } = home_data[0];

  return (
    <Fragment>
      <Banner icons={icons} slides={carousel} />
      <Chefs chefs={chefs} />
      <Testimonials testimonials={testimonials} />
      <Reservation reservation={reservation} />
    </Fragment>
  );
};

// About.propTypes = {};

export default About;
