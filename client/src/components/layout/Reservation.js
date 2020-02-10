import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getReservation } from '../../actions';
import Spinner from './Spinner';

const Reservation = ({
  getReservation,
  reservation: { loading, reservation }
}) => {
  useEffect(() => {
    getReservation();
  }, [getReservation]);

  if (loading) {
    return <Spinner />;
  }

  const { image, title } = reservation[0];
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

Reservation.propTypes = {
  getReservation: PropTypes.func.isRequired,
  reservation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reservation: state.reservation
});

export default connect(mapStateToProps, { getReservation })(Reservation);
