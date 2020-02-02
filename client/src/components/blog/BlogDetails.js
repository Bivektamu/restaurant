import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogDetails = ({ blog }) => {
  const {
    title,
    image,
    date,
    category,
    description,
    // comments,
    likes
  } = blog;

  return (
    <section id='blog-details'>
      <Link className='back' to='/blogs'>
        &lt;&nbsp;Back
      </Link>
      <h3 className='title'>{title}</h3>
      <div className='cat-likes'>
        <span>Posted on {date}</span>
        <span className='cat'>#{category}</span>
        <button className='button'>
          <span>{likes ? likes.length : '0'}</span>&nbsp;&nbsp;
          <i className='fas fa-thumbs-up'></i>
        </button>
        <button className='button'>
          <i className='fas fa-thumbs-down'></i>
        </button>
      </div>

      <img src={image} alt={title} />

      <p className='description'>{description}</p>
    </section>
  );
};

BlogDetails.propTypes = {};

export default BlogDetails;
