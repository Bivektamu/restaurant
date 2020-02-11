import React from 'react';
import spinner from '../../spinner.gif';

const Spinner = () => {
  return (
    <div className='spinner'>
      <img
        src={spinner}
        style={{ width: '100px', margin: 'auto', display: 'block' }}
        alt='Loading'
      />
    </div>
  );
};

export default Spinner;