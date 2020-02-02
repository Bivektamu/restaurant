import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import data from '../../data';
import BlogDetails from './BlogDetails';
import Comments from './Comments';

const Blog = ({ match }) => {
  useEffect(() => {
    const Blogs_Link = document.getElementById('blogs-link');
    console.log(Blogs_Link);
    Blogs_Link.classList.add('active');
    return () => {
      Blogs_Link.classList.remove('active');
    };
  }, []);

  // blogs-link
  const blogsData = data.filter(({ section }) => section === 'blogs');
  const { blogs } = blogsData[0];
  const Blog_By_Id = blogs.filter(({ id }) => id === parseInt(match.params.id));

  const { comments } = Blog_By_Id[0];

  return (
    <Fragment>
      <BlogDetails blog={Blog_By_Id[0]} />
      <Comments comments={comments} />
    </Fragment>
  );
};

Blog.propTypes = {};

export default Blog;
