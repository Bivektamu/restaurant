import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Carousel from './Carousel';

import iconService from '../img/banner/fas-service-icon.png';
import iconFood from '../img/banner/fresh-food-icon.png';
import iconSupport from '../img/banner/support-icon.png';

const Banner = () => {
  return (
    <section className='hero-banner'>
      <div className='hero-wrapper'>
        <div className='hero-left'>
          <h1 className='hero-title'>
            Foods the <br /> most precious things
          </h1>
          <div className='d-sm-flex flex-wrap'>
            <Link className='button button-hero button-shadow' to='#'>
              Book Now
            </Link>
            <Link className='hero-banner__video' to=''>
              Watch Video
            </Link>
          </div>
          <ul className='hero-info d-none d-lg-block'>
            <li>
              <img src={iconService} alt='' />
              <h4>Fast Service</h4>
            </li>
            <li>
              <img src={iconFood} alt='' />
              <h4>Fresh Food</h4>
            </li>
            <li>
              <img src={iconSupport} alt='' />
              <h4>24/7 Support</h4>
            </li>
          </ul>
          <ul className='social-icons d-none d-lg-block'>
            <li>
              <a href='https://www.facebook.com' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' target='_blank'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com' target='_blank'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='hero-right'>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

// Banner.propTypes = {};

export default Banner;
