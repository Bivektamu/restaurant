import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Blog = ({ blogs }) => {
  const postCard = blogs.map(
    ({ image, date, title, description, category, comments, likes, id }) => {
      return (
        <div key={id}>
          <Link to={`/blogs/${id}`} className='img-wrap'>
            <img src={image} alt={title} />
          </Link>
          <div className='wrapper'>
            <p className='date'>
              <Moment format='DD'>{date}</Moment>
              <br />
              <Moment format='MMMM'>{date}</Moment>
              {/* <Moment format='YYYY'>{date}</Moment> */}
            </p>
            <Link to={`/blogs/${id}`}>
              <h3 className='title'>{title}</h3>
            </Link>
            <p>
              {description
                .split(' ')
                .splice(0, 20)
                .join(' ')}
            </p>
            <div className='cat-likes'>
              <span className='cat'>#{category}</span>
              <span className='comment'>
                <i className='far fa-comment'></i>&nbsp;
                {comments ? comments.length : '0'} Comments
              </span>
              <button className='button'>
                <span>{likes ? likes.length : '0'}</span>{' '}
                <i className='fas fa-thumbs-up'></i>
              </button>
              <button className='button'>
                <i className='fas fa-thumbs-down'></i>
              </button>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <section id='blogs'>
      <h2 className='heading'>Recent Blogs</h2>
      <div className='grid-2'>{postCard}</div>
    </section>
  );
};

Blog.propTypes = {
  blogs: PropTypes.array.isRequired
};

export default Blog;
