import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogDetails = ({ blog }) => {
  const { title, image, date, category, description } = blog;

  return (
    <section id='blog-details'>
      <Link className='back' to='/blogs'>
        &lt;&nbsp;Back
      </Link>
      <h3 className='title'>{title}</h3>
      <div className='cat-likes'>
        <span>Posted on {date}</span>
        <span className='cat'>#{category}</span>
      </div>

      <img src={image} alt={title} />

      <p className='description'>{description}</p>
    </section>
  );
};

BlogDetails.propTypes = {
  blog: PropTypes.object.isRequired
};

export default BlogDetails;
