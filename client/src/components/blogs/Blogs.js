import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import Banner from './Banner';
import Blog from './Blog';

import Reservation from '../layout/Reservation';

import data from '../../data';

const Blogs = () => {
  const homeData = data.filter(({ section }) => section === 'home');
  const blogsData = data.filter(({ section }) => section === 'blogs');

  const { icons, carousel, reservation } = homeData[0];
  const { blogs } = blogsData[0];

  return (
    <Fragment>
      <Banner icons={icons} slides={carousel} />
      <Blog blogs={blogs} />
      <Reservation reservation={reservation} />
    </Fragment>
  );
};

// Blogs.propTypes = {};

export default Blogs;
