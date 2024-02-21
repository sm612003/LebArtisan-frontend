import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/1.jpg';
import '../components/TestiMonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "../common/Heading";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../redux/cartSlice";
import '../components/TestiMonials.css'

const NextArrow = (props) => (
  <div {...props} className="slick-arrow next-arrow">
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = (props) => (
  <div {...props} className="slick-arrow prev-arrow">
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='p-8 overflow-hidden text-center relative category'>
      <Heading
        title="Artisan"
        description=" Immerse yourself in a world of creativity and craftsmanship as you explore the unique stories behind each artisan's work"
      />
      <Slider {...settings}>
        <div className='box'>
          <img src={img} alt='image1' />
          <h3>lamsa</h3>
          <p>hello from lamsa</p>
          <a href='#' className='btn'>Read More</a>
        </div>
        <div className='box'>
          <img src={img} alt='image1' />
          <h3>candle</h3>
          <p>hello from Candle</p>
          <a href='#' className='btn'>Read More</a>
        </div>
        <div className='box'>
          <img src={img} alt='image1' />
          <h3>hi</h3>
          <p>hiiiiii</p>
          <a href='#' className='btn'>Read More</a>
        </div>
        <div className='box'>
          <img src={img} alt='image1' />
          <h3>testt</h3>
          <p>testtinng</p>
          <a href='#' className='btn'>Read More</a>
        </div>
        {/* Add more testimonial boxes here */}
      </Slider>
    </div>
  );
}

export default Testimonials;
