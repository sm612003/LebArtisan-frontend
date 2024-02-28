// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img from '../assets/1.jpg';
// import '../components/TestiMonials.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import Heading from "../common/Heading";
// import { useDispatch } from "react-redux";
// import { addToCart, getCartTotal } from "../redux/cartSlice";
// import '../components/TestiMonials.css'

// const NextArrow = (props) => (
//   <div {...props} className="slick-arrow next-arrow">
//     <FontAwesomeIcon icon={faChevronRight} />
//   </div>
// );

// const PrevArrow = (props) => (
//   <div {...props} className="slick-arrow prev-arrow">
//     <FontAwesomeIcon icon={faChevronLeft} />
//   </div>
// );

// const Testimonials = () => {
//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className='p-8 overflow-hidden text-center relative category'>
//       <Heading
//         title="Artisan"
//         description=" Immerse yourself in a world of creativity and craftsmanship as you explore the unique stories behind each artisan's work"
//       />
//       <Slider {...settings}>
//         <div className='box'>
//           <img src={img} alt='image1' />
//           <h3>lamsa</h3>
//           <p>hello from lamsa</p>
//           <a href='#' className='btn'>Read More</a>
//         </div>
//         <div className='box'>
//           <img src={img} alt='image1' />
//           <h3>candle</h3>
//           <p>hello from Candle</p>
//           <a href='#' className='btn'>Read More</a>
//         </div>
//         <div className='box'>
//           <img src={img} alt='image1' />
//           <h3>hi</h3>
//           <p>hiiiiii</p>
//           <a href='#' className='btn'>Read More</a>
//         </div>
//         <div className='box'>
//           <img src={img} alt='image1' />
//           <h3>testt</h3>
//           <p>testtinng</p>
//           <a href='#' className='btn'>Read More</a>
//         </div>
//         {/* Add more testimonial boxes here */}
//       </Slider>
//     </div>
//   );
// }

// export default Testimonials;
// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import Heading from "../common/Heading";
// import '../components/TestiMonials.css';

// const NextArrow = (props) => (
//   <div {...props} className="slick-arrow next-arrow">
//     <FontAwesomeIcon icon={faChevronRight} />
//   </div>
// );

// const PrevArrow = (props) => (
//   <div {...props} className="slick-arrow prev-arrow">
//     <FontAwesomeIcon icon={faChevronLeft} />
//   </div>
// );

// const Testimonials = ({ eventId }) => {
//   const [acceptedArtists, setAcceptedArtists] = useState([]);

//   useEffect(() => {
//     const fetchAcceptedArtists = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/events/${eventId}/accept`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch accepted artists');
//         }
//         const data = await response.json();
//         setAcceptedArtists(data);
//       } catch (error) {
//         console.error('Error fetching accepted artists:', error);
//       }
//     };
//     fetchAcceptedArtists();
//   }, [eventId]);

//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className='p-8 overflow-hidden text-center relative category'>
//       <Heading
//         title="Artisan"
//         description="Immerse yourself in a world of creativity and craftsmanship as you explore the unique stories behind each artisan's work"
//       />
//       <Slider {...settings}>
//         {acceptedArtists.map(artist => (
//           <div key={artist._id} className='box'>
//             <img src={artist.image} alt={artist.BrandName} />
//             <h3>{artist.BrandName}</h3>
//             <p>{artist.craftType}</p>
//             <a href={`/product/${artist._id}`} className='btn'>Read More</a>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Heading from "../common/Heading";
import '../components/TestiMonials.css';

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

const Testimonials = ({ eventId }) => {
  const [acceptedArtists, setAcceptedArtists] = useState([]);
  const fetchAcceptedArtists = async () => {
    try {
      const response = await fetch(`http://localhost:5000/events/${eventId}/accept`);
      if (!response.ok) {
        throw new Error('Failed to fetch accepted artists');
      }
      const data = await response.json();
      
      // Remove duplicates based on _id
      const uniqueArtists = [];
      const artistIds = new Set();
      data.forEach(artist => {
        if (!artistIds.has(artist._id)) {
          uniqueArtists.push(artist);
          artistIds.add(artist._id);
        }
      });
      console.log('Event ID:', eventId);

      setAcceptedArtists(uniqueArtists);
    } catch (error) {
      console.error('Error fetching accepted artists:', error);
    }
  };
  useEffect(() => {    
    fetchAcceptedArtists();
  }, []);

  var settings = {
    dots: false,
    infinite:false,
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
        description=" Discover the rich tapestry of talents embraced within this event, where every piece tells a story, and every artist's vision unfolds in a symphony of artistry and passion."
      />
      <Slider {...settings}>
        {acceptedArtists.map(artist => (
          <div key={artist._id} className='box' style={{display:'flex'}}>
            <img src={`${process.env.REACT_APP_BACKEND}/${artist.image}`} alt={artist.BrandName} />
            <h3>{artist.BrandName}</h3>
            <p>{artist.craftType}</p>
            <a href={`/product/${artist._id}`} className='btn'>Read More</a>
          </div>
        ))}
      </Slider>
    </div>
  );

};

export default Testimonials;
