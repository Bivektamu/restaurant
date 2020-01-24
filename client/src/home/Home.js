import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from './Banner';
import Popular from './Popular';

import data from '../data';

const Home = () => {
  const homeImg = data.filter(({ section }) => section === 'home');

  const { icons, carousel, popular } = homeImg[0];

  return (
    <Fragment>
      <Banner icons={icons} slides={carousel} />
      <Popular />
    </Fragment>
  );
};

// Home.propTypes = {};

export default Home;
