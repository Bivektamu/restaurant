import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from '../layout/Banner';
import Popular from './Popular';
import Offer from './Offer';
import Reservation from '../layout/Reservation';
import Blog from './Blog';

const Home = () => {
  return (
    <Fragment>
      <Banner
        title='Foods the
most precious things'
        from='home'
      />
      <Popular />
      <Offer />
      <Reservation />
      <Blog />
    </Fragment>
  );
};

// Home.propTypes = {};

export default Home;
