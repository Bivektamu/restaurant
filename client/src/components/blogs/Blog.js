import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import uuid from 'uuid';

const Blog = ({ blogs }) => {
  const postCard = blogs.map(
    ({ image, date, title, description, category, comments, likes, user }) => {
      const id = uuid.v4();
      return (
        <div key={id}>
          <div className='img-wrap'>
            <img src={image} alt={title} />
          </div>
          <div className='wrapper'>
            <p className='date'>
              <Moment format='DD'>{date}</Moment>
              <br />
              <Moment format='MMMM'>{date}</Moment>
              {/* <Moment format='YYYY'>{date}</Moment> */}
            </p>
            <h3 className='title'>{title}</h3>
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
                {likes ? likes.length : '0'} Like
              </button>
              <button className='button'>Unlike</button>
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
