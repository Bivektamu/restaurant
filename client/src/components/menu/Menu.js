import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from '../layout/Banner';
import MenuCard from './MenuCard';
import Reservation from '../layout/Reservation';

import data from '../../data';

const Menu = () => {
  const menuImg = data.filter(({ section }) => section === 'menu');

  const { menus } = menuImg[0];

  return (
    <Fragment>
      <Banner
        title='Food Menu'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <MenuCard menus={menus} />
      <Reservation />
    </Fragment>
  );
};

// Menu.propTypes = {};

export default Menu;
