import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './Arrival.css'

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [events, setEvents] = useState([]);
  const [timer, setTimer] = useState();
  const [loading, setLoading] = useState(true);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/events/read/all`);
        const data = await response.json();
        setEvents(data);
        setTimer(2000);
        setLoading(false);
        // Initialize position indexes based on the number of events
        setPositionIndexes(Array.from({ length: data.length }, (_, index) => index));
      } catch (error) {
        setLoading(false);
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();

    const interval = setInterval(handleNext, timer);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [timer]); // Empty dependency array ensures this effect runs only once on mount

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
  
  if (screenWidth <= 450) {
    imageVariants.center = { x: "-27%", scale: 1, zIndex: 5 };
  }
  
  const sliderContainerStyle = screenWidth <= 280 ? {
    width: "193%",
    height: "90%",
    position: "relative",
    marginBottom: '300px',
    marginRight: '25%'
  } : screenWidth <= 450 ? {
    width: "189%",
    height: "90%",
    position: "relative",
    marginBottom: '300px',
    marginRight: '43%'
  } : screenWidth <= 1048 ? {
    width: "164%", // Adjusted width
    height: "90%",
    position: "relative",
    marginBottom: '300px',
    marginRight: '72%' // Adjusted marginRight
  } : {
    width: "70%",
    height: "90%",
    position: "relative",
    marginBottom: '300px',
    marginRight: '30%'
  };
  
  
  return (
    !loading && (
      <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden" style={{ backgroundColor: '#E1E1E0' }}>
        <div className="mb-8 text-center">
          <p className="font-playfair font-semibold text-4xl" style={{ marginTop: '50px', color: '#8B8B8B' }} >
            <span className="text-red" style={{ color: '#0E4D4F' }}>Upcoming </span>Events
          </p>
  
          <div className="flex justify-center mt-5">
            <div style={{ borderBottom: '2px solid #6C9192', width: '66.67%' }} />
          </div>
          <p style={{ marginTop: '50px', fontSize: '25px', color: '#8B8B8B' }}>Discover our upcoming events and mark your calendars!</p>
        </div>
        <div className="slider-container" style={sliderContainerStyle}>
          {events.map((event, index) => (
            <Link key={index} to={`/event/${event._id}`}>
              <motion.div
                className="rounded-[12px] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
              >
                <img src={`${process.env.REACT_APP_BACKEND}/${event.image}`} alt={event.title} style={{ width: "100%", height: "auto", marginBottom: "10px", borderRadius: '15px' }} />
                {screenWidth > 450 && (
                  <p className="event-title" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>{event.title}</p>
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    )
  );
                }  

export default ImageSlider;
