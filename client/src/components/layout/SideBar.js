import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import data from '../../data';

const SideBar = props => {
  const navImg = data.filter(({ section }) => section === 'nav');
  const { logo, icons } = navImg[0];

  var header = null;
  useEffect(() => {
    header = document.querySelector('header');
    console.log(header);
  }, []);

  const toggleNav = e => {
    header.classList.toggle('active_nav');
  };

  return (
    <header className='fixed-menu' id='header'>
      <div className='menu-header'>
        <NavLink id='logo' to='/'>
          <img src={logo.image} alt={logo.title} />
        </NavLink>
      </div>
      <button id='nav-toggle' onClick={e => toggleNav(e)}>
        <span></span>
      </button>
      <div className='nav-wrapper'>
        <div className='navbar'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                onClick={e => toggleNav(e)}
                exact
                className='nav-link'
                to='/'
              >
                <img src={icons[0].image} alt={icons[0].title} />
                home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                onClick={e => toggleNav(e)}
                exact
                className='nav-link'
                activeClassName='active'
                to='/about'
              >
                <img src={icons[1].image} alt={icons[1].title} /> about
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                onClick={e => toggleNav(e)}
                exact
                className='nav-link'
                to='/menu'
              >
                <img src={icons[2].image} alt={icons[2].title} />
                menu
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                onClick={e => toggleNav(e)}
                exact
                className='nav-link'
                to='/booking'
              >
                <img src={icons[3].image} alt={icons[3].title} />
                Book Table
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                onClick={e => toggleNav(e)}
                exact
                className='nav-link'
                id='blogs-link'
                to='/blogs'
              >
                <img src={icons[4].image} alt={icons[4].title} />
                blogs
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                onClick={e => toggleNav(e)}
                exact
                className='nav-link'
                to='/contact'
              >
                <img src={icons[5].image} alt={icons[5].title} />
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

// SideBar.propTypes = {};

export default SideBar;
