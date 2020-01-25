import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Offer = ({ offer }) => {
  const { title, description, image } = offer;
  return (
    <section id='offer'>
      <div className='grid-2'>
        <div>
          <img src={image} />
        </div>
        <div>
          <div className='wrapper'>
            <h3 className='title'>{title}</h3>
            <h2 className='heading'>{description}</h2>
            <Link to='/blog'>
              <button className='button'>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired
};

export default Offer;
