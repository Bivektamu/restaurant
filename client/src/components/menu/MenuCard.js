import React, { useEffect } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMenus } from '../../actions';
import Spinner from '../layout/Spinner';

const MenuCard = ({ getMenus, menus: { loading, menus } }) => {
  useEffect(() => {
    getMenus();
  }, [getMenus]);

  if (loading) {
    return <Spinner />;
  }

  const mennuItems = menus.map(({ image, title, description, price }) => {
    const id = uuid.v4();
    return (
      <div className='grid' key={id}>
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

MenuCard.propTypes = {
  menus: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  menus: state.menus
});

export default connect(mapStateToProps, { getMenus })(MenuCard);
