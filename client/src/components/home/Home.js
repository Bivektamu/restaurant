import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from '../layout/Banner';
import Popular from './Popular';
import Offer from './Offer';
import Reservation from '../layout/Reservation';
import Blog from './Blog';

import data from '../../data';

const Home = () => {
  const homeImg = data.filter(({ section }) => section === 'home');

  const { popular, offer, recent } = homeImg[0];

  return (
    <Fragment>
      <Banner
        title='Foods the
most precious things'
        from='home'
      />
      <Popular popular={popular} />
      <Offer offer={offer} />
      <Reservation />
      <Blog recent={recent} />
    </Fragment>
  );
};

// Home.propTypes = {};

export default Home;
