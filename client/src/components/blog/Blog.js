import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getBlogById } from '../../actions';

import BlogDetails from './BlogDetails';
import Comments from './Comments';
import Spinner from '../layout/Spinner';

const Blog = ({ getBlogById, blog: { loading, blog }, match }) => {
  useEffect(() => {
    getBlogById(parseInt(match.params.id));
  }, [getBlogById, match.params.id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <BlogDetails blog={blog[0]} />
      <Comments blog={blog[0]} />
    </Fragment>
  );
};

Blog.propTypes = {
  match: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  getBlogById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getBlogById })(Blog);
