import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Banner from './Banner';
import MenuCard from './MenuCard';
import Reservation from '../layout/Reservation';

import data from '../../data';

const Menu = () => {
  const homeImg = data.filter(({ section }) => section === 'home');
  const menuImg = data.filter(({ section }) => section === 'menu');

  const { icons, carousel, reservation } = homeImg[0];
  const { menus } = menuImg[0];

  return (
    <Fragment>
      <Banner icons={icons} slides={carousel} />
      <MenuCard menus={menus} />
      <Reservation reservation={reservation} />
    </Fragment>
  );
};

// Menu.propTypes = {};

export default Menu;
