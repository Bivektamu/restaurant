import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ blog }) => {
  const { comments, likes } = blog;
  const Comment_Item = comments.map(({ id, date, text, user }) => {
    return (
      <div className='comment-wrapper' key={id}>
        <div className='user'>
          <img src='/img/users/avatar.png' alt={user} />
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

        <div className='like-wrapper'>
          {likes.length > 0 ? (
            <p>{likes.length} People liked this post.</p>
          ) : (
            <p>Like this Post. Hit thumbs up.</p>
          )}

          <div>
            <button className='button'>
              <i className='fas fa-thumbs-up'></i>
            </button>
            &nbsp;&nbsp;
            <button className='button'>
              <i className='fas fa-thumbs-down'></i>
            </button>
          </div>
        </div>

        <h3 className='title'>{comments.length === 0 && 'No'} Comments</h3>

        {comments.length > 0 && Comment_Item}
      </div>
    </section>
  );
};

Comments.propTypes = {
  blog: PropTypes.object.isRequired
};

export default Comments;
