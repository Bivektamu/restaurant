import React from 'react';
import uuid from 'uuid';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
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
    autoplay: false
  };

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context('../img/home/', false, /\.(jpe?g)$/)
  );

  const slides = images.map(image => {
    const id = uuid.v4();

    return (
      <div key={id}>
        <img src={image} alt='slide' />
      </div>
    );
  });

  console.log(images);

  return <Slider {...settings}>{slides}</Slider>;
};

export default Carousel;
