import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

const Card = ({ from, items }) => {
  const cards = items.map(item => {
    const { title, image, description } = item;

    if (from === 'blog') {
      var { date, category } = item;
    }

    if (from === 'chef') {
      var { name, position, social } = item;
    }

    const id = uuid.v4();
    return (
      <div key={id}>
        <img src={image} alt={title ? title : name} />
        <div className='wrapper'>
          {(date || category) && (
            <Fragment>
              <div>
                {from === 'blog' && (
                  <Fragment>
                    <span>{date}</span>
                    <span className='category'>
                      <span>#</span>&nbsp;
                      {category}
                    </span>
                  </Fragment>
                )}
              </div>
            </Fragment>
          )}

          <h2 className='title'>{from === 'chef' ? name : title}</h2>

          {from === 'chef' && <p>{position}</p>}
          {from === 'popular' && <p>{description}</p>}

          {from === 'chef' && (
            <Fragment>
              <div className='social-links'>
                <a
                  href={social.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a
                  href={social.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-twitter'></i>
                </a>
                <a
                  href={social.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-instagram'></i>
                </a>
                <a
                  href={social.skype}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-skype'></i>
                </a>
              </div>
            </Fragment>
          )}

          {from === 'blog' && <Link to='/blog'>Read More</Link>}
        </div>
      </div>
    );
  });
  return <div className='grid-3'>{cards}</div>;
};

Card.propTypes = {
  from: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default Card;
