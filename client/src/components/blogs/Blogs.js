import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import Banner from '../layout/Banner';
import Blog from './Blog';

import Reservation from '../layout/Reservation';

import data from '../../data';

const Blogs = () => {
  const blogsData = data.filter(({ section }) => section === 'blogs');

  const { blogs } = blogsData[0];

  return (
    <Fragment>
      <Banner
        title='Latest News'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <Blog blogs={blogs} />
      <Reservation />
    </Fragment>
  );
};

// Blogs.propTypes = {};

export default Blogs;
