import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import data from '../../data';
import BlogDetails from './BlogDetails';
import Comments from './Comments';

const Blog = ({ match }) => {
  useEffect(() => {
    const Blogs_Link = document.getElementById('blogs-link');
    Blogs_Link.classList.add('active');
    return () => {
      Blogs_Link.classList.remove('active');
    };
  }, []);

  const blogsData = data.filter(({ section }) => section === 'blogs');
  const { blogs } = blogsData[0];
  const Blog_By_Id = blogs.filter(({ id }) => id === parseInt(match.params.id));

  return (
    <Fragment>
      <BlogDetails blog={Blog_By_Id[0]} />
      <Comments blog={Blog_By_Id[0]} />
    </Fragment>
  );
};

Blog.propTypes = {
  match: PropTypes.object.isRequired
};

export default Blog;
