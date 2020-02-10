import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBanner } from '../../actions';

import Carousel from './Carousel';
import Spinner from '../layout/Spinner';

const Banner = ({
  getBanner,
  banner: { loading, banner },
  from,
  title,
  slides,
  text
}) => {
  useEffect(() => {
    getBanner(from);
  }, [getBanner, from]);

  if (loading) {
    return <Spinner />;
  }

  const { icons, carousel } = banner;

  return (
    <section className='hero-banner'>
      <div className='hero-wrapper'>
        <div className='hero-left'>
          <h1 className='heading'>{title}</h1>
          {from === 'home' ? (
            <Fragment>
              <div className='d-sm-flex flex-wrap'>
                <Link
                  className='button button-hero button-shadow'
                  to='/booking'
                >
                  Book Now
                </Link>
                {/* <Link className='hero-banner__video' to=''>
                  Watch Video
                </Link> */}
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <p>{text}</p>
            </Fragment>
          )}
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
          <Carousel slides={slides ? slides : carousel} />
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  banner: PropTypes.object.isRequired,
  getBanner: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  banner: state.banner
});

export default connect(mapStateToProps, { getBanner })(Banner);
