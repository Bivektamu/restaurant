import React, { useEffect } from 'react';
import Card from '../layout/Card';
import { connect } from 'react-redux';

import { getChefs } from '../../actions';

import Spinner from '../layout/Spinner';

const Chefs = ({ getChefs, chefs: { loading, chefs } }) => {
  useEffect(() => {
    getChefs();
  }, [getChefs]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <section id='chefs'>
      <h5 className='small-heading'>Our Chefs</h5>
      <h2 className='heading'>Talent & experience member</h2>
      <Card from='chef' items={chefs} />
    </section>
  );
};

const mapStateToProps = state => ({
  chefs: state.chefs
});
export default connect(mapStateToProps, { getChefs })(Chefs);
