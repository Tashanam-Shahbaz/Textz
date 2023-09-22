import React from "react";
import "./mystyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import image1 from "../images/image_1.jpg";
import image2 from "../images/image_3.jpg";
import image3 from "..//images/image_2.jpg";



function MyCarousel() {
    return (<Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="c_carousel_caption">
            <h3>We value your time.</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="c_carousel_caption">
            <h3>Boost up your potential.</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="c_carousel_caption">
            <h3>Just Learn and Create</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    )
};
export default MyCarousel;