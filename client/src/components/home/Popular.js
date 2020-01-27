import React from 'react';
import Card from '../layout/Card';

const Popular = ({ popular }) => {
  return (
    <section id='popular'>
      <h5 className='small-heading'>Popular Dishes</h5>
      <h2 className='heading'>Our Exclusive Items</h2>
      <Card from='popular' items={popular} />
    </section>
  );
};

export default Popular;
