import React from 'react';
import uuid from 'uuid';

const Menus = ({ menus }) => {
  console.log(menus);
  const mennuItems = menus.map(({ image, title, description, price }) => {
    const id = uuid.v4();
    return (
      <div className='grid'>
        <img src={image} alt={title} />
        <div className='wrapper'>
          <h3 className='title'>{title}</h3>
          <p>{description}</p>
          <span>${price}</span>
        </div>
      </div>
    );
  });
  return (
    <section id='menus'>
      <h5 className='small-heading'>Food Menus</h5>
      <h2 className='heading'>Delicious Food</h2>
      <div className='grid-2'>{mennuItems}</div>
    </section>
  );
};

export default Menus;
