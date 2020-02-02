import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from './Banner';
import BookingForm from './BookingForm';

import data from '../../data';

const Booking = () => {
  const homeImg = data.filter(({ section }) => section === 'home');

  const { icons, carousel } = homeImg[0];

  return (
    <Fragment>
      <Banner icons={icons} slides={carousel} />
      <BookingForm />
    </Fragment>
  );
};

// Booking.propTypes = {};

export default Booking;
