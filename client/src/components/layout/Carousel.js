import React from 'react';
import uuid from 'uuid';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ slides }) => {
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
    autoplay: true
  };

  const carousel_Slides = slides.map(({ image, title }) => {
    const id = uuid.v4();

    return (
      <div key={id}>
        <img src={image} alt={title} />
      </div>
    );
  });

  return <Slider {...settings}>{carousel_Slides}</Slider>;
};

export default Carousel;
