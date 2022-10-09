import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const CarouselUno = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d22fxaf9t8d39k.cloudfront.net/ba44afb162dc297e501cdf8edae11c684847a1a686dc5884ce32c086e2c41fbb61267.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d22fxaf9t8d39k.cloudfront.net/2dc2020c82efc261e14590c430bc60a7cdbfc716e1abb82cbe9330f519c4b93c61267.png"
          alt="Second slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselUno;