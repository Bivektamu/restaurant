import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeatured } from '../../actions';
import PropTypes from 'prop-types';
import Card from '../layout/Card';
import Spinner from '../layout/Spinner';

const Popular = ({ getFeatured, popular: { loading, popular } }) => {
  useEffect(() => {
    getFeatured();
  }, [getFeatured]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <section id='popular'>
      <h5 className='small-heading'>Popular Dishes</h5>
      <h2 className='heading'>Our Exclusive Items</h2>
      <Card from='popular' items={popular} />
    </section>
  );
};

Popular.prototype = {
  getFeatured: PropTypes.func.isRequired,
  popular: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  popular: state.popular
});

export default connect(mapStateToProps, { getFeatured })(Popular);
