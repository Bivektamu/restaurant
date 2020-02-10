import React, { Fragment } from 'react';
import Banner from '../layout/Banner';
import MenuCard from './MenuCard';
import Reservation from '../layout/Reservation';

const Menu = () => {
  return (
    <Fragment>
      <Banner
        title='Food Menu'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <MenuCard />
      <Reservation />
    </Fragment>
  );
};

export default Menu;
