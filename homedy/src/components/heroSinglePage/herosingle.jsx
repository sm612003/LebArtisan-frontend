// Importing necessary dependencies and styles
import React from "react";
import herosingle from "./herosingle.module.css";
import { motion } from "framer-motion"

// Functional component for the hero section on the homepage
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
            staggerChildren: 0.2
        },
    },
}

const HeroSectionsingle = () => {
    return (
        <div className={herosingle.containerHero} >
            {/* Background image container */}
            <div className={herosingle.backgroundImage}>
                {/* Content container */}
                <motion.div className={herosingle.content} variants={textVariants} initial="initial" animate="animate">
                    {/* Main title */}
                    <motion.h1 className={herosingle.title} variants={textVariants}>
                    <span className={herosingle.spann}> our </span>
                        Products
                    </motion.h1>
                    <motion.h2 className={herosingle.Title} variants={textVariants}>
                        Handcrafted by famous artisans
                        in Bat Trang pottery village.
                    </motion.h2>

                    {/* Button linking to the contact page */}
                    {/* <motion.a href="/contmotion.act" className={herosingle.button} >
            Contact Us
          </motion.a> */}
                </motion.div>
            </div>
        </div>
    );
};

// Exporting the herosingleHomepage component
export default HeroSectionsingle;
