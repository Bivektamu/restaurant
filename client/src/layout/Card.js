import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

const Card = ({ items }) => {
  const cards = items.map(({ title, image, description, date, category }) => {
    const id = uuid.v4();
    return (
      <div key={id}>
        <img src={image} />
        <div className='wrapper'>
          {(date || category) && (
            <Fragment>
              <div>
                {date && <span>{date}</span>}
                {category && (
                  <span className='category'>
                    <span>#</span>&nbsp;
                    {category}
                  </span>
                )}
              </div>
            </Fragment>
          )}

          <h2 className='title'>{title}</h2>

          {(!date || !category) && <p>{description}</p>}

          <Link to='/blog'>Read More</Link>
        </div>
      </div>
    );
  });
  return <div className='grid-3'>{cards}</div>;
};

Card.propTypes = {};

export default Card;
