// import React, { useState } from "react";
// import { products } from "../data/Data";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import "./../main.css";
// import Heading from "../common/Heading";
// import { useDispatch } from "react-redux";
// import { addToCart, getCartTotal } from "../redux/cartSlice";

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

// const Arrival = () => {
//   var settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const [qty] = useState(1);
//   const dispatch = useDispatch();
//   const handleAddToCart = (item) => {
//     console.log(item);
//     let totalPrice = qty * item.price;
//     const tempProduct = {
//       ...item,
//       quantity: qty,
//       totalPrice,
//     };
//     dispatch(addToCart(tempProduct));
//     dispatch(getCartTotal());
//   };

//   return (
//     <div className="p-8 overflow-hidden text-center relative bg-gray-50 z-0">
//       <Heading
//         title="Upcoming Events"
//         description="Mark your calendars and join us for unforgettable experiences!"
//       />
//       <Slider {...settings}>
//         {products.slice(0, 6).map((item, index) => (
//           <div key={index} className="mx-auto max-w-xs relative">
//             <div className="p-1 hover:bg-gray-200 hover:shadow transition-all duration-300 relative group">
//               <img
//                 src={item.img}
//                 title={item.category}
//                 alt={item.category}
//                 className="mx-auto"
//               />
//               <div className="icons absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
//                 <div className="flex flex-wrap flex-col  p-2 mr-1 mt-1">
//                   <FontAwesomeIcon
//                     className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
//                     title="add to cart"
//                     icon="shopping-cart"
//                     onClick={() => handleAddToCart(item)}
//                   />
//                   <FontAwesomeIcon
//                     className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
//                     title="add to cart"
//                     icon="heart"
//                   />
//                   <FontAwesomeIcon
//                     className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
//                     title="add to cart"
//                     icon="balance-scale"
//                   />
//                   <FontAwesomeIcon
//                     className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
//                     title="add to cart"
//                     icon="eye"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="font-semibold uppercase">{item.name}</div>
//               <div>${item.price}</div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Arrival; ///second one
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import city1 from "../assets/pexels-lil-artsy-3427720.jpg";
// import city2 from "../assets/pexels-freestocksorg-3940334.jpg";
// import city3 from "../assets/pexels-freestocksorg-3940334.jpg";
// import planet1 from "../assets/pexels-vlada-karpovich-6755753.jpg";
// import planet2 from "../assets/pexels-yan-krukau-6611420.jpg";

// const ImageSlider = () => {
//   const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

//   const handleNext = () => {
//     setPositionIndexes((prevIndexes) => {
//       const updatedIndexes = prevIndexes.map(
//         (prevIndex) => (prevIndex + 1) % 5
//       );
//       return updatedIndexes;
//     });
//   };

//   const handleBack = () => {
//     setPositionIndexes((prevIndexes) => {
//       const updatedIndexes = prevIndexes.map(
//         (prevIndex) => (prevIndex + 4) % 5
//       );

//       return updatedIndexes;
//     });
//   };

//   const images = [city1, city2, city3, planet1, planet2];

//   const positions = ["center", "left1", "left", "right", "right1"];

//   const imageVariants = {
//     center: { x: "0%", scale: 1, zIndex: 5 },
//     left1: { x: "-50%", scale: 0.7, zIndex: 3 },
//     left: { x: "-90%", scale: 0.5, zIndex: 2 },
//     right: { x: "90%", scale: 0.5, zIndex: 1 },
//     right1: { x: "50%", scale: 0.7, zIndex: 3 },
//   };

//   useEffect(() => {
//     const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, []); // Run only once on mount

//   return (
//     <div className="flex items-center flex-col justify-center bg-black h-screen relative overflow-hidden">
//       {images.map((image, index) => (
//         <motion.img
//           key={index}
//           src={image}
//           alt={image}
//           className="rounded-[12px] absolute top-0 left-0"
//           initial="center"
//           animate={positions[positionIndexes[index]]}
//           variants={imageVariants}
//           transition={{ duration: 0.5 }}
//           style={{ width: "20%" }}
//         />
//       ))}
//       <div className="flex flex-row gap-3 absolute bottom-5 left-0 right-0 justify-center">
//         {/* Remove buttons as they are not needed */}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import city1 from "../assets/pexels-lil-artsy-3427720.jpg";
// import city2 from "../assets/pexels-freestocksorg-3940334.jpg";
// import city3 from "../assets/pexels-freestocksorg-3940334.jpg";
// import planet1 from "../assets/pexels-vlada-karpovich-6755753.jpg";
// import planet2 from "../assets/pexels-yan-krukau-6611420.jpg";

// const ImageSlider = () => {
//   const [positionIndexes, setPositionIndexes] = useState([1, 2, 0, 3, 4]);

//   const handleNext = () => {
//     setPositionIndexes((prevIndexes) => {
//       const updatedIndexes = prevIndexes.map(
//         (prevIndex) => (prevIndex + 1) % 5
//       );
//       return updatedIndexes;
//     });
//   };

//   const handleBack = () => {
//     setPositionIndexes((prevIndexes) => {
//       const updatedIndexes = prevIndexes.map(
//         (prevIndex) => (prevIndex + 4) % 5
//       );
//       return updatedIndexes;
//     });
//   };

//   const images = [city1, city2, city3, planet1, planet2];

//   const positions = ["center", "left1", "left", "right", "right1"];

//   const imageVariants = {
//     center: { x: "0%", scale: 1, zIndex: 5 },
//     left1: { x: "-50%", rotateY: -15, scale: 0.8, zIndex: 3 },
//     left: { x: "-90%", rotateY: -30, scale: 0.6, zIndex: 2 },
//     right: { x: "90%", rotateY: 30, scale: 0.6, zIndex: 2 },
//     right1: { x: "50%", rotateY: 15, scale: 0.8, zIndex: 3 },
//   };

//   useEffect(() => {
//     const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, []); // Run only once on mount

//   return (
//     <div className="flex flex-col items-center justify-center bg-white h-screen relative overflow-hidden">
//       <div className="mb-8 text-center">
//         <h2 className="text-xl font-bold" style={{ marginTop: '50px', fontSize: '40px' }}>Upcoming Events</h2>
//         <p style={{ marginTop: '50px', fontSize: '20px' }}>Discover our upcoming events and mark your calendars!</p>
//       </div>
//       <div
//         className="slider-container"
//         style={{ width: "50%", height: "70%", position: "relative", marginBottom: '300px', marginRight: '30%' }}
//       >
//         {images.map((image, index) => (
//           <motion.img
//             key={index}
//             src={image}
//             alt={image}
//             className="rounded-[12px] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//             initial="center"
//             animate={positions[positionIndexes[index]]}
//             variants={imageVariants}
//             transition={{ duration: 0.5 }}
//             style={{ width: "60%", height: "100%", objectFit: "cover" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const ImageSlider = () => {
//   const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/events/read/all");
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };

//     fetchEvents();

//     const interval = setInterval(handleNext, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setPositionIndexes((prevIndexes) =>
//       prevIndexes.map((prevIndex) => (prevIndex + 1) % events.length)
//     );
//   };

//   const positions = ["center", "left1", "left", "right", "right1"];

//   const imageVariants = {
//     center: { x: "0%", scale: 1, zIndex: 5 },
//     left1: { x: "-50%", rotateY: -15, scale: 0.8, zIndex: 3 },
//     left: { x: "-90%", rotateY: -30, scale: 0.6, zIndex: 2 },
//     right: { x: "90%", rotateY: 30, scale: 0.6, zIndex: 2 },
//     right1: { x: "50%", rotateY: 15, scale: 0.8, zIndex: 3 },
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-white h-screen relative overflow-hidden">
//       <div className="mb-8 text-center">
//         <h2 className="text-xl font-bold" style={{ marginTop: '50px', fontSize: '40px' }}>Upcoming Events</h2>
//         <p style={{ marginTop: '50px', fontSize: '20px' }}>Discover our upcoming events and mark your calendars!</p>
//       </div>
//       <div className="slider-container" style={{ width: "50%", height: "70%", position: "relative", marginBottom: '300px', marginRight: '30%' }}>
//         {events.map((event, index) => (
//           <motion.div
//             key={index}
//             className="rounded-[12px] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//             initial="center"
//             animate={positions[positionIndexes[index]]}
//             variants={imageVariants}
//             transition={{ duration: 0.5 }}
//           >
//             <img src={`${process.env.REACT_APP_BACKEND}/${event.image}`} alt={event.title} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
//             <p>{event.title}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/events/read/all");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    fetchEvents();
  
    const interval = setInterval(handleNext, 1000);
    return () => clearInterval(interval);
  }, []);
  

  const handleNext = () => {
    if (events.length > 0) {
      setPositionIndexes((prevIndexes) =>
        prevIndexes.map((prevIndex) => (prevIndex + 1) % events.length)
      );
    }
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", rotateY: -15, scale: 0.8, zIndex: 3 },
    left: { x: "-90%", rotateY: -30, scale: 0.6, zIndex: 2 },
    right: { x: "90%", rotateY: 30, scale: 0.6, zIndex: 2 },
    right1: { x: "50%", rotateY: 15, scale: 0.8, zIndex: 3 },
  };

  return (
    <div className="flex flex-col items-center justify-center \ h-screen relative overflow-hidden" style={{backgroundColor:'#E1E1E0'}}>
      <div className="mb-8 text-center">
      <p className="font-playfair font-semibold text-4xl" style={{marginTop:'50px',color:'#8B8B8B'}} >
                        <span className="text-red" style={{ color: '#0E4D4F'  }}>Upcoming </span>Events
                    </p>

                    <div className="flex justify-center mt-5">
                        <div style={{ borderBottom: '2px solid #6C9192', width: '66.67%' }} />
                    </div>
        <p style={{ marginTop: '50px', fontSize: '25px',color:'#8B8B8B' }}>Discover our upcoming events and mark your calendars!</p>
      </div>
      <div className="slider-container" style={{ width: "70%", height: "90%", position: "relative", marginBottom: '300px', marginRight: '30%' }}>
        {events.map((event, index) => (
          <Link key={index} to={`/event/${event._id}`}>
            <motion.div
              className="rounded-[12px] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            >
              <img src={`${process.env.REACT_APP_BACKEND}/${event.image}`} alt={event.title} style={{ width: "100%", height: "auto", marginBottom: "10px",borderRadius:'15px' }} />
              <p style={{ textAlign: 'center', color: '#0E4D4F', fontSize: '20px', fontWeight: 'bold' }}>{event.title}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

