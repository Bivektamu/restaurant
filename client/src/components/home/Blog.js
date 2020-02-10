import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../layout/Card';
import Spinner from '../layout/Spinner';

import { getRecentBlogs } from '../../actions';

const Blog = ({ getRecentBlogs, recent: { loading, recent } }) => {
  useEffect(() => {
    getRecentBlogs();
  }, [getRecentBlogs]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <section id='blog'>
      <h5 className='small-heading'>Recent News</h5>
      <h2 className='heading'>Latest From Blog</h2>
      <Card from='blog' items={recent} />
    </section>
  );
};

Blog.prototype = {
  recent: PropTypes.object.isRequired,
  getRecentBlogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  recent: state.recent
});
export default connect(mapStateToProps, { getRecentBlogs })(Blog);
