import React from 'react';
import "./Testimonials.css";
import { testimonials } from '../../data/Data.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

  return (
    <div className='testimonials section-p'>
        <div className='container'>
            <div className='testimonials-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>About <span className='about-us'>Us</span></h3>
                </div>

                <div className='testimonials-list'>
                    <Slider {...settings}>
                        {
                            testimonials.map((testimonial, index) => {
                                return (
                                    <div className='testimonials-item text-center text-white' key = {index}>
                                        <div className='testimonials-item-text'>
                                            <span className='fs-22'>{testimonial.name}</span>
                                            <p className='text mx-auto'>{testimonial.paragraph}</p>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

          
            </div>
        </div>
    </div>
  )
}

export default Testimonials