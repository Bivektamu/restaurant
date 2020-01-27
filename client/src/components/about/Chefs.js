import React from 'react';
import Card from '../layout/Card';

const Chefs = ({ chefs }) => {
  return (
    <section id='chefs'>
      <h5 className='small-heading'>Our Chefs</h5>
      <h2 className='heading'>Talent & experience member</h2>
      <Card from='chef' items={chefs} />
    </section>
  );
};

export default Chefs;
