import React from 'react';
import PropTypes from 'prop-types';

const Reservation = ({ reservation }) => {
  const { image, title } = reservation;
  return (
    <section id='reservation' style={{ backgroundImage: `url(${image})` }}>
      <div className='wrapper'>
        <h3>{title}</h3>
        <h2 className='heading'>Make a reservation</h2>
        <button className='button'>Book Table</button>
      </div>
    </section>
  );
};

Reservation.propTypes = {};

export default Reservation;
