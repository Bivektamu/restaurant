import React from 'react';
// import PropTypes from 'prop-types';

import Carousel from '../layout/Carousel';

const Banner = ({ icons, slides }) => {
  return (
    <section className='hero-banner'>
      <div className='hero-wrapper'>
        <div className='hero-left'>
          <h1 className='heading'>Latest News</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className='hero-info d-none d-lg-block'>
            <li>
              <img src={icons[0].image} alt='' />
              <h4>{icons[0].title}</h4>
            </li>
            <li>
              <img src={icons[1].image} alt='' />
              <h4>{icons[1].title}</h4>
            </li>
            <li>
              <img src={icons[2].image} alt='' />
              <h4>{icons[2].title}</h4>
            </li>
          </ul>
          <ul className='social-icons d-none d-lg-block'>
            <li>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='hero-right'>
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
};

// Banner.propTypes = {};

export default Banner;
