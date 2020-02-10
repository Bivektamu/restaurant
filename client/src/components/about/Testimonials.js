import React, { useEffect } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';

import { getTestimonial } from '../../actions';

import Spinner from '../layout/Spinner';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = ({
  getTestimonial,
  testimonial: { loading, testimonial }
}) => {
  useEffect(() => {
    getTestimonial();
  }, [getTestimonial]);

  if (loading) {
    return <Spinner />;
  }
  const settings = {
    swipeToSlide: true,
    dots: true,
    // fade:true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: false
  };

  const testimonials_Slides = testimonial.map(
    ({ image, name, position, description }) => {
      const id = uuid.v4();

      return (
        <div key={id}>
          <div className='grid-2'>
            <img src={image} alt='client' />
            <div className='car-info'>
              <p>{description}</p>
              <h2 className='title'>
                {name}, <span className='position'>{position}</span>
              </h2>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <section id='testimonials'>
      <div className='wrapper'>
        <h5 className='small-heading'>Testimonials</h5>
        <h2 className='heading'>Customer Feedback</h2>
        <Slider {...settings}>{testimonials_Slides}</Slider>;
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  testimonial: state.testimonial
});

export default connect(mapStateToProps, { getTestimonial })(Testimonials);
