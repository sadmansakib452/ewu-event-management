import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Reviews";
import logo from '../../images/reviews.svg'
const Reviews = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div >
        
      <Carousel className="w-50 m-auto" activeIndex={index} onSelect={handleSelect}>
      <h5 className="mb-5 text-center">Reviews</h5>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
