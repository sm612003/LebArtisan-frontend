// import React, {useState} from 'react';
// import {works} from "../../constants/data";
// import "./Work.css";
// import {BsPlusLg} from "react-icons/bs";
// import {ImCancelCircle} from "react-icons/im";
// import { Link } from 'react-router-dom';

// const Work = () => {
//     const [imageModal, setImageModal] = useState(false);
//     const [imageSource, setImageSource] = useState("");

//     const setImageOnModal = (src) => {
//         setImageModal(true);
//         setImageSource(src);
//     }

//   return (
//     <div className='work section-p bg-grey' id = "work">
//         <div className={imageModal ? "image-box show-image-box" : "image-box"}>
//             <div className='image-box-content'>
//                 <img src = {imageSource} alt = "" />
//                 <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
//                     <ImCancelCircle size = {30} className = "text"  />
//                 </span>
//             </div>
//         </div>

//         <div className='container'>
//             <div className='work-content'>
//                 <div className='section-title'>
//                     <h3 className='text-brown'>Our <span className='Artisan'>Artisans</span></h3>
//                     <p className='text'>Handcrafted by famous artisans 
// in Bat Trang pottery village.</p>
//                 </div>

//                 <div className='work-list grid'>
//                     {
//                         works.map((work, index) => {
//                             return (
//                                 <div className='work-item text-center' key = {index} onClick = {() => setImageOnModal(work.image)}>
//                                     <img src = {work.image} alt = "" />
//                                     <span className='work-item-icon'>
//                                         <BsPlusLg size = {38} className = "text" />
//                                     </span>
//                                 </div>
//                             )
//                         })
//                     }

//                 </div>
//                 <div className=' style button' >
//     <Link to="/services" className=" view-more-button">View More</Link>
// </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Work
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../project.css';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 1, scale: 0.6 }, // Adjusted opacity to 1 and scale to 0.6
    visible: { opacity: 1, scale: 1 },  // Adjusted opacity to 1 and scale to 1
};

const Project = ({ projectData }) => {
    const { BrandName, userImage, about_us } = projectData;

    const overlayStyles = `absolute h-full w-full overlay-container hover:opacity-90 transition duration-500
    bg-gray-200 bg-opacity-90 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    const handleHover = (event) => {
        const overlay = event.currentTarget.querySelector('.hover-overlay');
        overlay.style.opacity = '0.9';
    };

    const handleHoverOut = (event) => {
        const overlay = event.currentTarget.querySelector('.hover-overlay');
        overlay.style.opacity = '0'; // Set opacity back to 0 when hover out
    };

    return (
        <motion.div variants={projectVariant} className="relative w-full h-full" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
            <div className={`${overlayStyles}`}>
                <p className="text-2xl font-playfair">{BrandName}</p>
                <p className="mt-7 hover-overlay" style={{ opacity: '0' }}>
                    {about_us.description}
                </p>
            </div>
            <img src={`${process.env.REACT_APP_BACKEND}/${userImage}`} alt={BrandName} className="w-full h-full object-cover" />
        </motion.div>
    );
};



const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/artist/byName');
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);
                } else {
                    console.error('Failed to fetch projects');
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS and other content */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map((project, index) => (
                        <Project key={index} projectData={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
