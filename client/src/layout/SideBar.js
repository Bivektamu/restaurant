import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import data from '../data';

const SideBar = props => {
  const navImg = data.filter(({ section }) => section === 'nav');
  const { logo, icons } = navImg[0];

  return (
    <header className='fixed-menu'>
      <div className='menu-header'>
        <div id='logo'>
          <img src={logo.image} alt={logo.title} />
        </div>
      </div>
      <div className='nav-wraper'>
        <div className='navbar'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='contact.html'>
                <img src={icons[0].image} alt={icons[0].title} />
                contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link active' to='index.html'>
                <img src={icons[1].image} alt={icons[1].title} /> home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='about-us.html'>
                <img src={icons[2].image} alt={icons[2].title} />
                about
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='menu.html'>
                <img src={icons[3].image} alt={icons[3].title} />
                menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='book-table.html'>
                <img src={icons[4].image} alt={icons[4].title} />
                Book Table
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='blog.html'>
                <img src={icons[5].image} alt={icons[5].title} />
                blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

// SideBar.propTypes = {};

export default SideBar;
