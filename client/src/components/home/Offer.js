import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOffer } from '../../actions';

import Spinner from '../layout/Spinner';

const Offer = ({ getOffer, offer: { loading, offer } }) => {
  useEffect(() => {
    getOffer();
  }, [getOffer]);

  if (loading) {
    return <Spinner />;
  }
  const { title, description, image } = offer;
  return (
    <section id='offer'>
      <div className='grid-2'>
        <div>
          <img src={image} alt={title} />
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
  offer: PropTypes.object.isRequired,
  getOffer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  offer: state.offer
});

export default connect(mapStateToProps, { getOffer })(Offer);
