import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data';
import { Link } from 'react-router-dom';

const Reservation = () => {
  const reservationData = data.filter(
    ({ section }) => section === 'reservation'
  );
  const { image, title } = reservationData[0];
  return (
    <section id='reservation' style={{ backgroundImage: `url(${image})` }}>
      <div className='wrapper'>
        <h3>{title}</h3>
        <h2 className='heading'>Make a reservation</h2>
        <Link to='/booking'>
          <button className='button'>Book Table</button>
        </Link>
      </div>
    </section>
  );
};

export default Reservation;
