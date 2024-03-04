import React from "react";
import img from '../../assets/Intersect (8).png';
import HeroSectionCss from "./herosection.module.css";
import {motion} from 'framer-motion'

const HeroSectionHomepage = () => {
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
  return (
    <section className={`${HeroSectionCss.container} ${HeroSectionCss.containerHero}`}>
    <motion.div className={HeroSectionCss.main} variants={textVariants} initial="initial" animate="animate">

      <div className={HeroSectionCss.detail}>
        <motion.h1 className={HeroSectionCss.title} variants={textVariants}>
          Learn <span className={HeroSectionCss.spann}> Handcraft</span> to start your own business
        </motion.h1>
        <p className={HeroSectionCss.discount}>
          Select desired courses from online or on-site categories,
          get individual assistance from instructors and master your new skills
        </p>
        {/* Button linking to the contact page */}
      </div>
      <div className={HeroSectionCss.images}>
        <img
          src={img}
          alt=""
          className={HeroSectionCss.imgW}
        />
      </div>
      
      </motion.div>
  </section>
  
  );
};

export default HeroSectionHomepage;
