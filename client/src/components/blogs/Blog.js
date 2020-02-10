import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBlogs } from '../../actions';
import Spinner from '../layout/Spinner';

const Blog = ({ getBlogs, blogs: { loading, blogs } }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  if (loading) {
    return <Spinner />;
  }

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
            </p>
            <Link to={`/blog/${id}`}>
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
  getBlogs: PropTypes.func.isRequired,
  blogs: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blogs: state.blogs
});

export default connect(mapStateToProps, { getBlogs })(Blog);
