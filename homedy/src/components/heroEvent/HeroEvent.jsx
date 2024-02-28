// Importing necessary dependencies and styles
import React from "react";
import HeroEvents from "./HeroEvents.module.css";
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

const HeroEvent = () => {
    return (
        <div className={HeroEvents.containerHero} >
          {/* Background image container */}
          <div className={HeroEvents.backgroundImage}>
            {/* Content container */}
            <motion.div className={HeroEvents.content} variants={textVariants} initial="initial" animate="animate">
              {/* Main title */}
              <motion.h1 className={HeroEvents.title} variants={textVariants}>

              Discover the  Artisanal  Essence  of Every  Event 
              </motion.h1>
              <motion.h2 className={HeroEvents.Title} variants={textVariants}>
              From cultural festivals to craft fairs, our page is your gateway 
              to discovering the artisans behind every unforgettable moment
              </motion.h2>
              
              {/* Button linking to the contact page */}
              {/* <motion.a href="/contmotion.act" className={HeroEvents.button} >
                Contact Us
              </motion.a> */}
            </motion.div>
          </div>
        </div>
      );
    };
    


export default HeroEvent
