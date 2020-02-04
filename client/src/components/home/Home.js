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

  const { carousel, popular, offer, reservation, recent } = homeImg[0];

  return (
    <Fragment>
      <Banner
        title='Foods the
most precious things'
        from='home'
        slides={carousel}
      />
      <Popular popular={popular} />
      <Offer offer={offer} />
      <Reservation reservation={reservation} />
      <Blog recent={recent} />
    </Fragment>
  );
};

// Home.propTypes = {};

export default Home;
