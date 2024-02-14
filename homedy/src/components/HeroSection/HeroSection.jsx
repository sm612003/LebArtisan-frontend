// Importing necessary dependencies and styles
import React from "react";
import HeroSection from "./HeroSection.module.css";
import { motion } from "framer-motion"

// Functional component for the hero section on the homepage
const textVariants={
  initial:{
      x:-500,
      opacity:0,
  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          duration:1,
          staggerChildren:0.2
      },
  },
}

const HeroSectionHomepage = () => {
  return (
    <div className={HeroSection.containerHero} >
      {/* Background image container */}
      <div className={HeroSection.backgroundImage}>
        {/* Content container */}
        <motion.div className={HeroSection.content} variants={textVariants} initial="initial" animate="animate">
          {/* Main title */}
          <motion.h1 className={HeroSection.title} variants={textVariants}>
          Elevate Your Style with Unique  <span className={HeroSection.spann}> Handmade </span>
          </motion.h1>
          <motion.h2 className={HeroSection.Title} variants={textVariants}>
          Discover a world of elegance and style with our unique handmade . 
          Crafted to perfection, each piece is a testament to artistry and individuality.
          </motion.h2>
          
          {/* Button linking to the contact page */}
          {/* <motion.a href="/contmotion.act" className={HeroSection.button} >
            Contact Us
          </motion.a> */}
        </motion.div>
      </div>
    </div>
  );
};

// Exporting the HeroSectionHomepage component
export default HeroSectionHomepage;
