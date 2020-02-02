import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments }) => {
  const Comment_Item = comments.map(({ id, date, text, user }) => {
    return (
      <div className='comment-wrapper' key={id}>
        <div className='user'>
          <img src='/img/users/avatar.png' />
          <p>{user}</p>
        </div>
        <div>
          <p className='dark-blue'>{text}</p>
          <p className='date'>Posted on {date}</p>
        </div>
        <div>
          <button className='button'>
            <i className='fas fa-times'></i>
          </button>
        </div>
      </div>
    );
  });

  return (
    <section id='comments'>
      <div className='wrapper'>
        <h2 className='heading'>Leave a Comment</h2>

        <form className='comment-form'>
          <textarea name='text' placeholder='Comment on this post'></textarea>
          <input type='submit' className='button' value='Submit' />
        </form>

        <h3 className='title'>{comments.length === 0 && 'No'} Comments</h3>

        {comments.length > 0 && Comment_Item}
      </div>
    </section>
  );
};

Comments.propTypes = {};

export default Comments;
