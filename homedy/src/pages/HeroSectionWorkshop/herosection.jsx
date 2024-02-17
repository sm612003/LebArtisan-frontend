import img from '../../assets/Intersect (8).png';
import React from "react";
import { Link } from "react-router-dom"; 
import HeroSectionCss from "./herosection.module.css";
import { motion } from "framer-motion"
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const HeroSectionHomepage = () => {
  return (
    <section className={`${HeroSectionCss.container} ${HeroSectionCss.containerHero}`}>
    <div className={HeroSectionCss.main}>
      <div className={HeroSectionCss.detail}>
        <h1>Learn  Handcraft to start your own business</h1>
        <p className={HeroSectionCss.discount}>
          Select desired courses from online or on-site categories,
         get individual assistance from instructors and master your new skills</p>
  
         
      </div>
      <div className={HeroSectionCss.images}>
        <img
          src={img}
          alt=""
          className={HeroSectionCss.imgW}
        />
      
      </div>

        {/* Button linking to the contact page */}
        <div className={HeroSectionCss.genralBtn}>
        <button href="/contmotion.act" className={HeroSectionCss.genralBtn} >
            Contact Us
          </button>
        </div>
 
    </div>
  </section>
  );
};

export default HeroSectionHomepage;