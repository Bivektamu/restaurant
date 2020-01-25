import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from './Banner';
import Popular from './Popular';
import Offer from './Offer';
import Reservation from './Reservation';
import Blog from './Blog';

import data from '../data';

const Home = () => {
  const homeImg = data.filter(({ section }) => section === 'home');

  const { icons, carousel, popular, offer, reservation, recent } = homeImg[0];

  console.log(recent);

  return (
    <Fragment>
      <Banner icons={icons} slides={carousel} />
      <Popular popular={popular} />
      <Offer offer={offer} />
      <Reservation reservation={reservation} />
      <Blog recent={recent} />
    </Fragment>
  );
};

// Home.propTypes = {};

export default Home;
