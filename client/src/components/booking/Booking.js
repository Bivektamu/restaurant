import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from '../layout/Banner';
import BookingForm from './BookingForm';

const Booking = () => {
  return (
    <Fragment>
      <Banner
        title='Book A Table'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />

      <BookingForm />
    </Fragment>
  );
};

// Booking.propTypes = {};

export default Booking;
