import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png';

import icon1 from '../img/nav-icon1.png';
import icon2 from '../img/nav-icon2.png';
import icon3 from '../img/nav-icon3.png';
import icon4 from '../img/nav-icon4.png';
import icon5 from '../img/nav-icon5.png';
import icon6 from '../img/nav-icon6.png';

const SideBar = props => {
  return (
    <header className='fixed-menu'>
      <div className='menu-header'>
        <div id='logo'>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className='nav-wraper'>
        <div className='navbar'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link active' to='index.html'>
                <img src={icon1} alt='' /> home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='about-us.html'>
                <img src={icon2} alt='' />
                about
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='menu.html'>
                <img src={icon3} alt='' />
                menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='book-table.html'>
                <img src={icon4} alt='' />
                Book Table
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='blog.html'>
                <img src={icon5} alt='' />
                blog
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='contact.html'>
                <img src={icon6} alt='' />
                contact
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
